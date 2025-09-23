
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search, LogIn, LogOut, LayoutDashboard, User } from "lucide-react"
import React from "react"

import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ThemeToggle } from "./theme-toggle"
import { useAuth } from "@/context/auth-context"
import { logoutUser } from "@/actions/auth"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

function SearchInput() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input 
        placeholder="Tìm Kiếm" 
        className="pl-9"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/website-lin-i.firebasestorage.app/o/Logo-Lien-doi.png?alt=media&token=9F937877-6455-41C5-B814-8D0FD806C613";

function AuthButton() {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logoutUser();
        router.push('/'); // Redirect to home after logout
        router.refresh();
    };

    if (loading) {
        return <Button variant="ghost" size="icon" disabled><div className="h-8 w-8 rounded-full bg-muted animate-pulse" /></Button>;
    }

    if (user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.photoURL || ''} alt={user.displayName || user.email || 'User'} />
                            <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                        <p className="font-semibold truncate">{user.displayName || user.email}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {isAdmin && (
                         <DropdownMenuItem asChild>
                            <Link href="/admin/dashboard">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span>Bảng điều khiển</span>
                            </Link>
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                         <Link href="/admin/profile">
                            <User className="mr-2 h-4 w-4" />
                            <span>Hồ sơ của tôi</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Đăng xuất</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <Button asChild variant="outline" size="sm">
            <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Đăng Nhập
            </Link>
        </Button>
    );
}


export function SiteHeader() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({})

  const handleMenuEnter = (href: string) => {
    setOpenMenus(prev => ({ ...prev, [href]: true }))
  }

  const handleMenuLeave = (href: string) => {
    setOpenMenus(prev => ({ ...prev, [href]: false }))
  }

  const isLinkActive = (href: string, subLinks?: any[]) => {
    if (pathname.startsWith('/admin')) return false; // Don't show active state for main nav when in admin
    if (href === '/') return pathname === '/';
    if (subLinks) {
      return pathname.startsWith(href);
    }
    return pathname === href;
  }

  const renderNavLink = (link: any, isMobile = false) => {
    const active = isLinkActive(link.href, link.subLinks);
    const linkClasses = cn(
        "transition-colors px-3 py-1.5 rounded-md flex items-center gap-2 text-sm font-medium",
        active 
            ? "nav-link-active" 
            : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
        isMobile ? "py-2 text-lg font-semibold w-full justify-start" : "",
    );

    if (link.subLinks) {
        if (isMobile) {
            return (
                 <AccordionItem value={link.name} key={link.href}>
                    <AccordionTrigger className={cn("py-2 text-lg font-semibold", active ? "text-primary no-underline" : "text-muted-foreground")}>
                        <Link href={link.href} className="flex items-center gap-2">
                            {link.icon}
                            {link.name}
                        </Link>
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                        {link.subLinks.map((subLink: any) => (
                             <Link key={subLink.href} href={subLink.href} className={cn("flex items-center gap-2 py-2 text-base font-medium", pathname === subLink.href ? "text-primary" : "text-muted-foreground")}>
                                {subLink.icon}
                                {subLink.name}
                            </Link>
                        ))}
                    </AccordionContent>
                </AccordionItem>
            )
        }
        return (
             <DropdownMenu key={link.href} open={openMenus[link.href]} onOpenChange={(isOpen) => setOpenMenus(prev => ({...prev, [link.href]: isOpen}))}>
                <div 
                    onMouseEnter={() => handleMenuEnter(link.href)}
                    onMouseLeave={() => handleMenuLeave(link.href)}
                    className="flex items-center"
                >
                    <Link href={link.href} className={cn(linkClasses, "hover:bg-transparent", active ? "" : "hover:text-primary")}>
                       {link.icon}
                       {link.name}
                    </Link>
                    <DropdownMenuTrigger asChild>
                         <Button variant="ghost" size="icon" className="h-8 w-6 hover:bg-secondary">
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent 
                    align="start"
                    className="mt-2"
                     onMouseLeave={() => handleMenuLeave(link.href)} 
                     onMouseEnter={() => handleMenuEnter(link.href)}
                >
                    {link.subLinks.map((subLink: any) => (
                        <DropdownMenuItem key={subLink.href} asChild>
                            <Link href={subLink.href} className="flex items-center gap-2">
                                {subLink.icon}
                                {subLink.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    return (
        <Link key={link.href} href={link.href} className={linkClasses}>
            {link.icon}
            {link.name}
        </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-[160px] items-center">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <div className="relative overflow-hidden rounded-full">
              <Image 
                  src={logoUrl}
                  width={96} 
                  height={96} 
                  alt="Logo" 
                  className="h-24 w-24"
              />
              <div className="glint-effect"></div>
            </div>
             <div className="flex flex-col justify-center">
              <h1 className="text-xl font-display whitespace-nowrap gradient-text">Liên Đội Trần Quang Khải</h1>
              <p className="text-sm text-muted-foreground mt-1 italic font-slogan">Phường Tân Sơn Nhì</p>
             </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <nav className="flex items-center space-x-1 rounded-lg bg-secondary/50 p-1">
               {navLinks.map((link) => renderNavLink(link))}
            </nav>
            <div className="ml-2 w-48">
              <SearchInput />
            </div>
            <ThemeToggle />
            <AuthButton />
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={logoUrl} 
              width={80} 
              height={80} 
              alt="Logo" 
              className="h-20 w-20"
            />
            <div className="flex flex-col">
              <span className="font-bold font-display gradient-text text-base whitespace-nowrap">Liên Đội TQK</span>
              <span className="text-xs text-muted-foreground italic font-slogan">Phường Tân Sơn Nhì</span>
            </div>
          </Link>
          <div className="flex items-center">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                  <div className="flex flex-col items-center mb-6">
                      <Link href="/" className="mb-4 flex flex-col items-center space-y-2">
                          <Image 
                            src={logoUrl} 
                            width={80} 
                            height={80} 
                            alt="Logo" 
                          />
                          <div className="text-center">
                              <h1 className="text-xl font-bold font-display whitespace-nowrap gradient-text">Liên Đội Trần Quang Khải</h1>
                              <p className="text-sm text-muted-foreground italic font-slogan">Phường Tân Sơn Nhì</p>
                          </div>
                      </Link>
                      <div className="w-full mt-4">
                          <SearchInput />
                      </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <Accordion type="multiple" className="w-full">
                    {navLinks.map((link) => renderNavLink(link, true))}
                  </Accordion>
                </div>
                 <div className="mt-auto border-t pt-4">
                    <AuthButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
