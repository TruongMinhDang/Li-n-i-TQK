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
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseProvider>
            <div id="fb-root"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=YOUR_FACEBOOK_APP_ID&autoLogAppEvents=1" nonce="aBcDeFg"></script>
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
