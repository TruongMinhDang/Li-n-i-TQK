"use client";

// This component is kept in case we need to add other client-side providers in the future.
// Currently, it just renders its children.
export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
