
'use server';

import { collection, addDoc, getFirestore, serverTimestamp } from 'firebase/firestore';
import firebaseApp from '@/lib/firebase';
import * as z from 'zod';

const db = getFirestore(firebaseApp);
const CONTACT_MESSAGES_COLLECTION = 'contact_messages';

const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự."),
  email: z.string().email("Địa chỉ email không hợp lệ."),
  subject: z.string().min(5, "Chủ đề phải có ít nhất 5 ký tự."),
  message: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự."),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate data on the server
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      // Get the first error message
      const firstError = validationResult.error.errors[0]?.message;
      return { success: false, error: firstError || 'Dữ liệu không hợp lệ.' };
    }

    const { name, email, subject, message } = validationResult.data;

    // Add the new contact message to Firestore
    await addDoc(collection(db, CONTACT_MESSAGES_COLLECTION), {
      name,
      email,
      subject,
      message,
      submittedAt: serverTimestamp(),
      read: false, // Add a flag to mark as unread
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: 'Đã xảy ra lỗi không mong muốn khi gửi tin nhắn. Vui lòng thử lại sau.' };
  }
}
