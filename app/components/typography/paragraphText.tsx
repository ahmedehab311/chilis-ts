import { ReactNode } from "react";
interface ParagraphWrapperProps {
    children: ReactNode;
    className?: string
}
export default function ParagraphWrapper({ children, className }: ParagraphWrapperProps) {
    return (
        <p className={`text-sm text-center mt-4 text-black font-normal ${className || ''}`}>
            {children}
        </p>
    )
}
