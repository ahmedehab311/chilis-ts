"use client"
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu, ToggleLang, DropdownMenuLinks } from "./index"
export default function Header() {
    const [isArabic, setIsArabic] = useState<boolean>(false)
    const navLinks = [
        { href: '/menu', label: "Menu" },
        { href: '/about', label: "About Us" },
        { href: '/locations', label: "Locations" },
        { href: '/contact', label: "Contact Us" }
    ]

    const navLinksIsTokenFound = [
        { href: '/profile', label: "profile" },
        { href: '/My-Orders', label: "My Orders" },
        { href: '/', label: "Logout" },
    ]
    const toggleLang = (): void => setIsArabic((prev) => !prev)
    const token: boolean = false

    return (
        <header className="w-full border-b bg-darkBlue text- px-6 py-4 flex justify-between items-center ">
            <ToggleLang isArabic={isArabic} toggleLang={toggleLang} />

            <nav className="hidden md:flex gap-16 text-sm font-medium ">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-white text-2xl flex ">{link.label}</Link>
                ))}
            </nav>
            {token ? (
                <DropdownMenuLinks navLinksIsTokenFound={navLinksIsTokenFound} />
            ) : (
                <Link href="/login" className="md:flex hidden">
                    <Button variant="outline" className="flex items-center gap-2">
                        <LogIn size={16} />
                        Login
                    </Button>
                </Link>
            )
            }
            <MobileMenu
                token={token}
                isArabic={isArabic}
                toggleLang={toggleLang}
                navLinksIsTokenFound={navLinksIsTokenFound}
                navLinks={navLinks}
            />
        </header>
    )
}
