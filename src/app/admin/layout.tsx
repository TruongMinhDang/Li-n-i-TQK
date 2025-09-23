
"use client";

import { useAuth } from "@/context/auth-context";
import { SidebarNav } from "./_components/sidebar-nav";
import { LogOut, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const adminNavItems = [
  {
    title: "Bảng Điều Khiển",
    href: "/admin/dashboard",
  },
  {
    title: "Hồ Sơ",
    href: "/admin/profile",
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
  const { user, loading, isAdmin } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/login');
    }
  }, [user, loading, isAdmin, router]);

  const handleLogout = async () => {
    await logoutUser();
    router.push('/login');
    router.refresh();
  };

  if (loading || !user || !isAdmin) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-10 pb-16">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
            <div className="flex flex-col h-full">
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
  );
}
