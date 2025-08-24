'use server';

import { doc, getDoc, getFirestore, setDoc, serverTimestamp } from 'firebase/firestore';
import firebaseApp from '@/lib/firebase';
import * as z from 'zod';

const db = getFirestore(firebaseApp);
const SUBSCRIBERS_COLLECTION = 'subscribers';

const emailSchema = z.string().email();

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate email on the server
    const validationResult = emailSchema.safeParse(email);
    if (!validationResult.success) {
      return { success: false, error: 'Địa chỉ email không hợp lệ.' };
    }

    const sanitizedEmail = validationResult.data;
    const subscriberDocRef = doc(db, SUBSCRIBERS_COLLECTION, sanitizedEmail);

    // Check if the user is already subscribed
    const docSnap = await getDoc(subscriberDocRef);
    if (docSnap.exists()) {
      return { success: false, error: 'Email này đã được đăng ký trước đó.' };
    }

    // Add the new subscriber
    await setDoc(subscriberDocRef, {
      email: sanitizedEmail,
      subscribedAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return { success: false, error: 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau.' };
  }
}
