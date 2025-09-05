
'use server';

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import * as z from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function loginUser(credentials: z.infer<typeof loginSchema>) {
  const validation = loginSchema.safeParse(credentials);
  if (!validation.success) {
    return { success: false, error: "Dữ liệu không hợp lệ." };
  }
  
  const { email, password } = validation.data;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // You can optionally return user data if needed, but for session management,
    // the client-side listener is more important.
    return { success: true, userId: userCredential.user.uid };
  } catch (error: any) {
    let errorMessage = "Email hoặc mật khẩu không đúng.";
    // You can check for specific Firebase error codes if you want
    // e.g., if (error.code === 'auth/user-not-found') { ... }
    return { success: false, error: errorMessage };
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
