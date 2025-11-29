import { ReactNode } from "react";
interface ParagraphWrapperProps {
    children: ReactNode;
    className?: string
}
export default function ParagraphWrapper({ children, className }: ParagraphWrapperProps) {
    return (
        <p className={`text-gray-700 leading-relaxed   ${className || ''}`}>
            {children}
        </p>
    )
}
