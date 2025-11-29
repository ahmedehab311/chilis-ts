'use client';
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react';
import Image from "next/image";
import imgLogo from "@/public/images/logo.png"
import Link from 'next/link';
interface mobileMenuProps {
    isArabic: boolean;
    toggleLang: () => void;
}
export default function ToggleLang({ isArabic, toggleLang }: mobileMenuProps) {
    return (
        <div className='flex justify-between items-center gap-7'>
            <Button onClick={toggleLang}
                className=" md:flex hidden items-center gap-2 cursor-pointer">
                <Globe size={18} />
                {isArabic ? "AR" : "EN"}
            </Button>
            <Link href="/">
                <Image
                    src={imgLogo}
                    alt="logo"
                    width={100}
                    height={30}
                />
            </Link>
        </div>
    )
}
