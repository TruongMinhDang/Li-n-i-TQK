
'use server';

import { 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile, 
    getAuth,
    createUserWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
    browserLocalPersistence
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import * as z from 'zod';
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';
import firebaseApp from '@/lib/firebase';

const loginSchema = z.object({
  email: z.string().email("Địa chỉ email không hợp lệ."),
  password: z.string().min(1, "Vui lòng nhập mật khẩu."),
  rememberMe: z.boolean().optional(),
});

export async function loginUser(credentials: z.infer<typeof loginSchema>) {
  const validation = loginSchema.safeParse(credentials);
  if (!validation.success) {
    return { success: false, error: validation.error.errors[0].message };
  }
  
  const { email, password, rememberMe } = validation.data;

  try {
    // Set session persistence based on "Remember Me"
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, userId: userCredential.user.uid };
  } catch (error: any) {
    let errorMessage = "Email hoặc mật khẩu không đúng.";
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        errorMessage = "Email hoặc mật khẩu không đúng.";
    }
    return { success: false, error: errorMessage };
  }
}

const registerSchema = z.object({
  email: z.string().email("Địa chỉ email không hợp lệ."),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự."),
});

export async function registerUser(credentials: z.infer<typeof registerSchema>) {
    const validation = registerSchema.safeParse(credentials);
    if (!validation.success) {
        return { success: false, error: validation.error.errors[0].message };
    }
    const { email, password } = validation.data;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // You can add logic here to create a user profile in Firestore if needed
        return { success: true, userId: userCredential.user.uid };
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            return { success: false, error: "Địa chỉ email này đã được sử dụng." };
        }
        return { success: false, error: "Đã có lỗi xảy ra. Vui lòng thử lại." };
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
