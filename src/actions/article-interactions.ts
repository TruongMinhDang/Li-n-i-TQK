'use server';

import { doc, getDoc, getFirestore, setDoc, increment, runTransaction } from 'firebase/firestore';
import firebaseApp from '@/lib/firebase';

const db = getFirestore(firebaseApp);
const ARTICLES_COLLECTION = 'articles';

interface ArticleStats {
    views: number;
    likes: number;
}

/**
 * Retrieves stats for a given article and atomically increments its view count.
 * If the article document doesn't exist, it will be created.
 * @param slug The unique identifier for the article.
 * @returns An object containing the new view count and the current like count.
 */
export async function getAndIncrementArticleViews(slug: string): Promise<ArticleStats> {
  const articleDocRef = doc(db, ARTICLES_COLLECTION, slug);

  try {
    const newStats = await runTransaction(db, async (transaction) => {
        const articleDoc = await transaction.get(articleDocRef);
        
        if (!articleDoc.exists()) {
            // Document doesn't exist, create it with initial values.
            const initialData = { views: 1, likes: 0, slug: slug };
            transaction.set(articleDocRef, initialData);
            return { views: 1, likes: 0 };
        }
        
        // Document exists, increment views.
        const currentViews = articleDoc.data().views || 0;
        const currentLikes = articleDoc.data().likes || 0;
        const newViews = currentViews + 1;
        
        transaction.update(articleDocRef, { views: newViews });
        
        return { views: newViews, likes: currentLikes };
    });
    return newStats;
  } catch (error) {
    console.error("Error in getAndIncrementArticleViews transaction:", error);
    // As a fallback, try to read the data without incrementing.
    try {
      const docSnap = await getDoc(articleDocRef);
      if (docSnap.exists()) {
        return {
          views: docSnap.data().views || 1,
          likes: docSnap.data().likes || 0,
        };
      }
    } catch (readError) {
      console.error("Error reading article stats after transaction failure:", readError);
    }
    // Return default values if everything fails.
    return { views: 1, likes: 0 };
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
