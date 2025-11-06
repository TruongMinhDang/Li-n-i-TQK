
"use server"

import { admin } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Get the auth service from the admin instance
const auth = admin.auth();

export async function logoutUser() {
  const sessionCookie = cookies().get("session")?.value;

  if (sessionCookie) {
    try {
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      await auth.revokeRefreshTokens(decodedClaims.sub);
      cookies().delete("session");
      console.log("User logged out successfully and session revoked.");
    } catch (error) {
      console.error("Error logging out:", error);
      // Even if revocation fails, try to clear the cookie to log the user out on the client-side
      cookies().delete("session");
    }
  }

  // Redirect to login page regardless of whether a session existed or not
  redirect("/login");
}
