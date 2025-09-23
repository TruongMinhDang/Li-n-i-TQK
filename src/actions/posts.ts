'use server';

import {
  collection,
  addDoc,
  getFirestore,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import firebaseApp from '@/lib/firebase';
import type { NewsArticle } from '@/lib/types';

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const ARTICLES_COLLECTION = 'articles';

// Zod schema for validation
const postSchema = z.object({
  title: z.string().min(10, 'Tiêu đề phải có ít nhất 10 ký tự.'),
  slug: z
    .string()
    .min(3, 'Slug phải có ít nhất 3 ký tự.')
    .regex(/^[a-z0-9-]+$/, 'Slug chỉ được chứa chữ thường, số và dấu gạch ngang.'),
  author: z.string().min(1, 'Vui lòng chọn tác giả.'),
  category: z.string().min(1, 'Vui lòng chọn chuyên mục.'),
  date: z.date(),
  description: z.string().min(20, 'Mô tả phải có ít nhất 20 ký tự.'),
  content: z.string().min(50, 'Nội dung phải có ít nhất 50 ký tự.'),
  image: z
    .object({
      dataUrl: z.string().startsWith('data:image/'),
      fileName: z.string(),
    })
    .optional(),
});

type PostFormData = z.infer<typeof postSchema>;

/**
 * Creates a new post, uploads the image to Firebase Storage, and saves the post to Firestore.
 * @param formData The data from the new post form.
 */
export async function createPost(
  formData: PostFormData
): Promise<{ success: boolean; error?: string }> {
  const validation = postSchema.safeParse(formData);
  if (!validation.success) {
    return { success: false, error: validation.error.errors[0].message };
  }

  const { image, ...postData } = validation.data;
  let imageUrl = 'https://placehold.co/600x400.png'; // Default image
  let imagePath = '';

  try {
    // 1. Upload image to Firebase Storage if it exists
    if (image) {
      const imageRef = ref(storage, `articles/${Date.now()}_${image.fileName}`);
      await uploadString(imageRef, image.dataUrl, 'data_url');
      imageUrl = await getDownloadURL(imageRef);
      imagePath = imageRef.fullPath;
    }

    // 2. Save post data to Firestore
    await addDoc(collection(db, ARTICLES_COLLECTION), {
      ...postData,
      date: serverTimestamp(), // Use server timestamp for consistency
      createdAt: serverTimestamp(),
      image: {
        src: imageUrl,
        path: imagePath, // Store path for future deletion/updates
        hint: 'article image', // Generic hint for now
      },
    });

    // 3. Revalidate paths to show the new post
    revalidatePath('/');
    revalidatePath('/tin-tuc');
    revalidatePath(`/tin-tuc/${postData.slug}`);
    revalidatePath('/admin/posts');
    
    // Revalidate category pages
    revalidatePath(`/hanh-trinh/${postData.category}`);
    revalidatePath(`/vuon-uom/${postData.category}`);


    return { success: true };
  } catch (error) {
    console.error('Error creating post:', error);
    // If image upload succeeded but Firestore failed, try to delete the uploaded image
    if (imagePath) {
      try {
        await deleteObject(ref(storage, imagePath));
      } catch (deleteError) {
        console.error('Failed to clean up uploaded image after error:', deleteError);
      }
    }
    return {
      success: false,
      error: 'Đã xảy ra lỗi khi tạo bài viết. Vui lòng thử lại.',
    };
  }
}

/**
 * Fetches all articles from Firestore, ordered by date descending.
 */
export async function getArticles(): Promise<NewsArticle[]> {
  try {
    const articlesQuery = query(
      collection(db, ARTICLES_COLLECTION),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(articlesQuery);
    const articles = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        category: data.category,
        date: data.date.toDate(),
        author: data.author,
        title: data.title,
        description: data.description,
        image: data.image,
        content: data.content,
      } as NewsArticle;
    });
    return articles;
  } catch (error) {
    console.error("Error fetching articles: ", error);
    return [];
  }
}

/**
 * Fetches a single article by its slug from Firestore.
 * @param slug The slug of the article to fetch.
 */
export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
    // Note: This is inefficient. For production, you'd want to query by slug.
    // This requires setting up a Firestore index on the 'slug' field.
    // For this project, we fetch all and filter.
    const articles = await getArticles();
    const article = articles.find(a => a.slug === slug);
    return article || null;
}
