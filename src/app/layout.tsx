import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { SiteHeader } from '@/components/layout/header'
import { SiteFooter } from '@/components/layout/footer'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Liên Đội THCS Trần Quang Khải',
  description: 'Website chính thức của Liên Đội THCS Trần Quang Khải',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 container py-8">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
