interface TitleProps {
    text: string;
    className?: string
}

export default function Title({ text, className }: TitleProps) {
    return (
        <h2 className={` text-4xl md:text-5xl font-extrabold leading-tight ${className || ''}`}>{text}</h2>
    )
}
