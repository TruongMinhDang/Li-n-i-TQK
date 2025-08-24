'use server';

import { doc, getDoc, getFirestore, setDoc, increment } from 'firebase/firestore';
import firebaseApp from '@/lib/firebase';

const db = getFirestore(firebaseApp);
const VIEWS_DOC_PATH = 'site/views';

export async function getAndIncrementViews(): Promise<number> {
  const viewsDocRef = doc(db, VIEWS_DOC_PATH);

  try {
    // Atomically increment the viewCount field.
    // If the document or field does not exist, it will be created.
    await setDoc(viewsDocRef, { viewCount: increment(1) }, { merge: true });

    // Get the new value after incrementing
    const updatedDoc = await getDoc(viewsDocRef);
    const newViews = updatedDoc.data()?.viewCount || 1;

    return newViews;
  } catch (error) {
    console.error("Error incrementing page views:", error);
    // If incrementing fails, try to just get the current value
    try {
        const currentDoc = await getDoc(viewsDocRef);
        if (currentDoc.exists()) {
            return currentDoc.data()?.viewCount || 0;
        }
        return 0;
    } catch (getError) {
        console.error("Error fetching page views after increment failed:", getError);
        // Return 0 or a default value if everything fails
        return 0;
    }
  }
}
