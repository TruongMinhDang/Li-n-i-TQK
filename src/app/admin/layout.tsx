
"use client";

import { AuthProvider, ProtectedRoute } from "@/context/auth-context";
import { SidebarNav } from "./_components/sidebar-nav";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

const adminNavItems = [
  {
    title: "Bảng Điều Khiển",
    href: "/admin/dashboard",
  },
  {
    title: "Tin Nhắn",
    href: "/admin/messages",
  },
  {
    title: "Bài Viết",
    href: "/admin/posts",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.push('/login');
  };

  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="space-y-6 p-4 md:p-10 pb-16">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
                <div className="flex flex-col">
                    <SidebarNav items={adminNavItems} />
                    <div className="mt-auto p-4">
                        <Button variant="ghost" onClick={handleLogout} className="w-full justify-start">
                            <LogOut className="mr-2 h-4 w-4" />
                            Đăng xuất
                        </Button>
                    </div>
                </div>
            </aside>
            <main className="flex-1 lg:max-w-4xl">{children}</main>
          </div>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}
