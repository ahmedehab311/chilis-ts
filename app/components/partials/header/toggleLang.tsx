'use client';
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react';
interface mobileMenuProps {
    isArabic: boolean;
    toggleLang: () => void;
}
export default function ToggleLang({ isArabic, toggleLang }: mobileMenuProps) {
    return (
        <Button onClick={toggleLang}
            className=" md:flex hidden items-center gap-2 cursor-pointer">
            <Globe size={18} />
            {isArabic ? "AR" : "EN"}
        </Button>
    )
}
