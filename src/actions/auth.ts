
'use server';

import { signInWithEmailAndPassword, signOut, updateProfile, getAuth } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import * as z from 'zod';
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import firebaseApp from '@/lib/firebase';

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

const profileSchema = z.object({
  displayName: z.string().min(2, "Tên hiển thị phải có ít nhất 2 ký tự.").optional(),
  photoDataUrl: z.string().startsWith('data:image/').optional(),
});

export async function updateUserProfile(formData: z.infer<typeof profileSchema>) {
    const validation = profileSchema.safeParse(formData);
    if (!validation.success) {
        return { success: false, error: "Dữ liệu không hợp lệ." };
    }

    const { displayName, photoDataUrl } = validation.data;
    const user = getAuth(firebaseApp).currentUser;

    if (!user) {
        return { success: false, error: "Người dùng chưa được xác thực." };
    }

    try {
        let photoURL = user.photoURL;

        // Handle photo upload
        if (photoDataUrl) {
            const storage = getStorage(firebaseApp);
            const avatarRef = ref(storage, `avatars/${user.uid}`);

            // Delete old avatar if it exists
            if (user.photoURL) {
                try {
                    const oldAvatarRef = ref(storage, user.photoURL);
                    await deleteObject(oldAvatarRef);
                } catch (deleteError: any) {
                    // Ignore "object-not-found" error
                    if (deleteError.code !== 'storage/object-not-found') {
                        console.error("Error deleting old avatar: ", deleteError);
                    }
                }
            }
            
            // Upload new avatar
            await uploadString(avatarRef, photoDataUrl, 'data_url');
            photoURL = await getDownloadURL(avatarRef);
        }

        // Update profile
        await updateProfile(user, {
            displayName: displayName ?? user.displayName,
            photoURL: photoURL,
        });

        return { success: true, message: "Hồ sơ đã được cập nhật thành công." };

    } catch (error: any) {
        console.error("Error updating profile:", error);
        return { success: false, error: "Đã xảy ra lỗi khi cập nhật hồ sơ." };
    }
}
