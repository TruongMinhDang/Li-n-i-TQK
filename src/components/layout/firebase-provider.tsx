"use client";

import { useEffect } from 'react';
import firebaseApp from '@/lib/firebase';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This hook ensures Firebase is initialized on the client side.
    // It also initializes App Check after the component has mounted.
    if (typeof window !== 'undefined') {
      try {
        initializeAppCheck(firebaseApp, {
          provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY!),
          isTokenAutoRefreshEnabled: true,
        });
      } catch (error) {
          console.error("Firebase App Check initialization error:", error);
      }
    }
  }, []);

  return <>{children}</>;
}
