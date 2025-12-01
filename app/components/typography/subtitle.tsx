interface SubtitleProps {
    text: string;
    className?: string
}

export default function Subtitle({ text, className }: SubtitleProps) {
    return (
        <h4 className={`font-BlackFont  text-2xl md:text-2xl font-bold  ${className || ''}`}>{text}</h4>
    )
}
