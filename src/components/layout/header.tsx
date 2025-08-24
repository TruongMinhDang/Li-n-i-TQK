
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search } from "lucide-react"
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
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      <div className="container flex h-24 items-center">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
                src="/logo.png"
                width={50} 
                height={50} 
                alt="Logo" 
                className="h-12 w-12"
            />
             <div className="flex flex-col">
              <h1 className="text-xl font-bold text-primary font-headline">Liên Đội Trần Quang Khải</h1>
              <p className="text-sm text-muted-foreground">Vững Bước Trường Thành – Tự Hào Đội Viên</p>
             </div>
          </Link>
          
          <div className="flex items-center gap-2">
            <nav className="flex items-center space-x-1 rounded-lg bg-secondary/50 p-1 font-headline">
               {navLinks.map((link) => renderNavLink(link))}
            </nav>
            <div className="ml-2 w-48">
              <SearchInput />
            </div>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={40} height={40} alt="Logo" />
            <div className="flex flex-col">
              <span className="font-bold font-headline text-primary">Liên Đội TQK</span>
              <span className="text-xs text-muted-foreground">Vững Bước Trường Thành</span>
            </div>
          </Link>
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
                        <Image src="/logo.png" width={80} height={80} alt="Logo" />
                        <div className="text-center">
                            <h1 className="text-lg font-bold text-primary font-headline">Liên Đội Trần Quang Khải</h1>
                            <p className="text-xs text-muted-foreground">Vững Bước Trường Thành – Tự Hào Đội Viên</p>
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
