interface TitleProps {
    text: string;
    className?: string
}

export default function Title({ text, className }: TitleProps) {
    return (
        <h2 className={`font-cairo text-4xl font-semibold text-black ${className || ''}`}>{text}</h2>
    )
}
