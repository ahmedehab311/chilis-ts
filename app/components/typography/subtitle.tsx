interface SubtitleProps {
    name: string;
    className?: string
}

export default function Subtitle({ name, className }: SubtitleProps) {
    return (
        <h4 className={`font-brother text-2xl md:text-3xl font-semibold  ${className || ''}`}>{name}</h4>
    )
}
