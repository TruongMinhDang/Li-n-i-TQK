import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { SiteHeader } from '@/components/layout/header'
import { SiteFooter } from '@/components/layout/footer'
import { Toaster } from "@/components/ui/toaster"
import FirebaseProvider from '@/components/layout/firebase-provider'
import { BackToTopButton } from '@/components/layout/back-to-top-button'
import { ChatBubble } from '@/components/layout/chat-bubble'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { AnnouncementTicker } from '@/components/layout/announcement-ticker'

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
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Pacifico&family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <AnnouncementTicker />
              <main className="flex-1 container py-8">
                {children}
              </main>
              <SiteFooter />
              <BackToTopButton />
              <ChatBubble />
            </div>
            <Toaster />
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
