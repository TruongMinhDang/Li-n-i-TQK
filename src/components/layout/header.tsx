"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Search, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/constants.tsx"
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

export function SiteHeader() {
  const pathname = usePathname()

  const isLinkActive = (href: string, subLinks?: any[]) => {
    if (pathname === href) return true;
    if (subLinks) {
      return subLinks.some(sub => pathname === sub.href);
    }
    return false;
  }

  const renderNavLink = (link: any, isMobile = false) => {
    const active = isLinkActive(link.href, link.subLinks);
    const linkClasses = cn(
        "flex items-center gap-2 transition-colors duration-300",
        isMobile ? "py-2 text-lg font-semibold" : "px-3 py-2 text-sm font-medium rounded-md",
        active 
            ? "nav-link-active text-primary" 
            : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground",
        {'border-b': isMobile && !link.subLinks}
    );
     const dropdownClasses = cn(
        "transition-colors hover:text-primary px-3 py-1.5 rounded-md flex items-center gap-1 text-sm font-medium hover:bg-secondary hover:text-secondary-foreground",
         active ? "nav-link-active text-primary" : "text-muted-foreground"
    );

    if (link.subLinks) {
        if (isMobile) {
            return (
                 <AccordionItem value={link.name} key={link.href}>
                    <AccordionTrigger className={cn("py-2 text-lg font-semibold", active ? "text-primary no-underline" : "text-muted-foreground")}>
                        <div className="flex items-center gap-2">
                            {link.icon}
                            {link.name}
                        </div>
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
            <DropdownMenu key={link.href}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={dropdownClasses}>
                        {link.icon}
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
      <div className="container flex h-28 items-center">
        {/* Desktop Header */}
        <div className="mr-4 hidden md:flex items-center w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
                src="https://placehold.co/120x120.png"
                data-ai-hint="school logo"
                width={100} 
                height={100} 
                alt="Logo" 
            />
          </Link>
          <div className="flex flex-col items-center flex-grow">
              <h1 className="text-2xl font-bold text-primary font-headline">Liên Đội Trần Quang Khải</h1>
              <p className="text-sm text-muted-foreground">Vững Bước Trường Thành – Tự Hào Đội Viên</p>
              <nav className="flex items-center space-x-1 mt-4 rounded-lg bg-secondary/50 p-1 font-headline">
                {navLinks.map((link) => renderNavLink(link))}
              </nav>
          </div>
          <div className="relative ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Tìm Kiếm" className="pl-9" />
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="https://placehold.co/80x80.png" data-ai-hint="school logo" width={40} height={40} alt="Logo" />
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
            <SheetContent side="left">
                <div className="flex flex-col items-center mb-6">
                    <Link href="/" className="mb-4 flex flex-col items-center space-y-2">
                        <Image src="https://placehold.co/100x100.png" data-ai-hint="school logo" width={80} height={80} alt="Logo" />
                        <div className="text-center">
                            <h1 className="text-lg font-bold text-primary font-headline">Liên Đội Trần Quang Khải</h1>
                            <p className="text-xs text-muted-foreground">Vững Bước Trường Thành – Tự Hào Đội Viên</p>
                        </div>
                    </Link>
                    <div className="relative w-full mt-4">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Tìm Kiếm" className="pl-9 w-full" />
                    </div>
              </div>
              <Accordion type="multiple" className="w-full">
                {navLinks.map((link) => renderNavLink(link, true))}
              </Accordion>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
