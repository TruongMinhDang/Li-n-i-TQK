
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Loader2 } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
});

// Danh sách các email được phép làm quản trị viên
const ADMIN_EMAILS = ['truongminhdang1@gmail.com'];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // Kiểm tra xem email của người dùng có nằm trong danh sách admin không
      if (user && user.email && ADMIN_EMAILS.includes(user.email)) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const value = { user, loading, isAdmin };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// A wrapper component to protect routes
export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (loading) return; // Đợi cho đến khi xác thực hoàn tất

        // Nếu không có người dùng, chuyển về trang đăng nhập
        if (!user) {
            if (pathname !== '/login') {
                router.push('/login');
            }
            return;
        }

        // Nếu có người dùng nhưng không phải admin, chuyển về trang chủ
        if (user && !isAdmin) {
            router.push('/');
        }
        
    }, [user, loading, isAdmin, router, pathname]);

    if (loading || !user || !isAdmin) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }
    
    // Nếu là admin, hiển thị nội dung được bảo vệ
    return <>{children}</>;
};
