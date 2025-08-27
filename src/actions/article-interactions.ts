'use server';

import { doc, getDoc, getFirestore, setDoc, increment, runTransaction } from 'firebase/firestore';
import firebaseApp from '@/lib/firebase';

const db = getFirestore(firebaseApp);
const ARTICLES_COLLECTION = 'articles';

interface ArticleStats {
    views: number;
    likes: number;
    averageRating: number;
    ratingCount: number;
}

/**
 * Retrieves stats for a given article and atomically increments its view count.
 * If the article document doesn't exist, it will be created.
 * @param slug The unique identifier for the article.
 * @returns An object containing views, likes, and rating stats.
 */
export async function getAndIncrementArticleViews(slug: string): Promise<ArticleStats> {
  const articleDocRef = doc(db, ARTICLES_COLLECTION, slug);

  try {
    const newStats = await runTransaction(db, async (transaction) => {
        const articleDoc = await transaction.get(articleDocRef);
        
        if (!articleDoc.exists()) {
            const initialData = { 
                views: 1, 
                likes: 0, 
                slug: slug,
                totalRating: 0,
                ratingCount: 0,
            };
            transaction.set(articleDocRef, initialData);
            return { views: 1, likes: 0, averageRating: 0, ratingCount: 0 };
        }
        
        const data = articleDoc.data();
        const newViews = (data.views || 0) + 1;
        transaction.update(articleDocRef, { views: newViews });
        
        const totalRating = data.totalRating || 0;
        const ratingCount = data.ratingCount || 0;
        const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;
        
        return { 
            views: newViews, 
            likes: data.likes || 0,
            averageRating: averageRating,
            ratingCount: ratingCount
        };
    });
    return newStats;
  } catch (error) {
    console.error("Error in getAndIncrementArticleViews transaction:", error);
    try {
      const docSnap = await getDoc(articleDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const totalRating = data.totalRating || 0;
        const ratingCount = data.ratingCount || 0;
        const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;
        return {
          views: data.views || 1,
          likes: data.likes || 0,
          averageRating: averageRating,
          ratingCount: ratingCount,
        };
      }
    } catch (readError) {
      console.error("Error reading article stats after transaction failure:", readError);
    }
    return { views: 1, likes: 0, averageRating: 0, ratingCount: 0 };
  }
}

/**
 * Atomically toggles the like count for an article.
 * @param slug The unique identifier for the article.
 * @param liked A boolean indicating whether the user is liking (true) or unliking (false).
 * @returns An object with the success status.
 */
export async function toggleArticleLike(slug: string, liked: boolean): Promise<{ success: boolean }> {
    const articleDocRef = doc(db, ARTICLES_COLLECTION, slug);
    const incrementValue = liked ? 1 : -1;

    try {
        await setDoc(articleDocRef, { likes: increment(incrementValue) }, { merge: true });
        return { success: true };
    } catch (error) {
        console.error("Error toggling article like:", error);
        return { success: false };
    }
}

/**
 * Submits a new rating for an article and updates the average.
 * @param slug The unique identifier for the article.
 * @param rating The new rating value (1-5).
 * @returns The new average rating and total rating count.
 */
export async function submitArticleRating(
    slug: string, 
    rating: number
): Promise<{ success: boolean; averageRating?: number; ratingCount?: number, error?: string }> {
    if (rating < 1 || rating > 5) {
        return { success: false, error: 'Rating must be between 1 and 5.' };
    }

    const articleDocRef = doc(db, ARTICLES_COLLECTION, slug);

    try {
        const { averageRating, ratingCount } = await runTransaction(db, async (transaction) => {
            const articleDoc = await transaction.get(articleDocRef);

            if (!articleDoc.exists()) {
                const initialData = { 
                    slug: slug,
                    views: 0,
                    likes: 0,
                    totalRating: rating,
                    ratingCount: 1,
                };
                transaction.set(articleDocRef, initialData);
                return { averageRating: rating, ratingCount: 1 };
            }

            const data = articleDoc.data();
            const newTotalRating = (data.totalRating || 0) + rating;
            const newRatingCount = (data.ratingCount || 0) + 1;
            
            transaction.update(articleDocRef, {
                totalRating: newTotalRating,
                ratingCount: newRatingCount
            });

            const newAverageRating = newTotalRating / newRatingCount;
            return { averageRating: newAverageRating, ratingCount: newRatingCount };
        });

        return { success: true, averageRating, ratingCount };
    } catch (error) {
        console.error("Error submitting rating:", error);
        return { success: false, error: 'Failed to submit rating.' };
    }
}
