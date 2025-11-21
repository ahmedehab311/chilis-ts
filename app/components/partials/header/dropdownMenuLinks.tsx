'use client';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, LogIn, Menu, User } from "lucide-react";
import Link from "next/link";
interface NavLinks {
    href: string;
    label: string;
}

interface mobileMenuProps {
    navLinksIsTokenFound: NavLinks[];
}

export default function DropdownMenuLinks({ navLinksIsTokenFound }: mobileMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" className="cursor-pointer">
                    <User size={20} className="white" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {navLinksIsTokenFound.map((link) => (
                    <DropdownMenuItem asChild key={link.href} className="cur">
                        <Link key={link.href} href={link.href}> {link.label}</Link>
                    </DropdownMenuItem>

                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
