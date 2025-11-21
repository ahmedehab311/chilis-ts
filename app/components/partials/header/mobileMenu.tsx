"use client"
import { Button } from "@/components/ui/button";
import { Globe, LogIn, Menu, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface NavLinks {
    href: string;
    label: string;
}

interface mobileMenuProps {
    token: boolean;
    isArabic: boolean;
    toggleLang: () => void;
    navLinksIsTokenFound: NavLinks[];
    navLinks: NavLinks[]
}

export default function MobileMenu({ token, isArabic, toggleLang, navLinksIsTokenFound, navLinks }: mobileMenuProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden" variant="outline" size="icon">
                    <Menu size={16} />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8 text-lg">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} >{link.label}</Link>
                    ))}
                    <button
                        onClick={toggleLang}
                        className="flex items-center gap-2 text-base cursor-pointer"
                    >
                        <Globe size={18} />
                        {isArabic ? "AR" : "EN"}
                    </button>

                    {token ? (
                        navLinksIsTokenFound.map((link) => (
                            <Link key={link.href} href={link.href}> {link.label}</Link>
                        ))
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </div>
            </SheetContent>

        </Sheet>
    )
}
