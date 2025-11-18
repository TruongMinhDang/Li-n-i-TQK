"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/firebase-admin"; 

export async function logoutUser() {
  // Lấy session cookie
  const sessionCookie = cookies().get("session")?.value;

  if (sessionCookie) {
    try {
      // Xác thực cookie — kiểm tra luôn token bị revoke hay chưa
      const decoded = await auth.verifySessionCookie(sessionCookie, true);

      // Thu hồi refresh tokens trong trường hợp user đăng xuất
      await auth.revokeRefreshTokens(decoded.sub);

      // Xóa cookie session
      cookies().delete("session");

      console.log("User logged out successfully and session revoked.");
    } catch (error) {
      console.error("Logout error:", error);

      // Dù verify lỗi vẫn xóa session cookie để logout client
      cookies().delete("session");
    }
  }

  // Điều hướng người dùng về trang login
  redirect("/login");
}
