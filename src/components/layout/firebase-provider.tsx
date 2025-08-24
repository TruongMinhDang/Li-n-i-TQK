"use client";

import { useEffect } from 'react';
import firebaseApp from '@/lib/firebase';

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This hook ensures Firebase is initialized on the client side.
  }, []);

  return <>{children}</>;
}
