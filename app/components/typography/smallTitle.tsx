interface SmallTitleProps {
    text: string;
    className?: string
}

export default function SmallTitle({ text, className }: SmallTitleProps) {
    return (
        <h3 className={`font-tahoma text-2xl md:text-4xl font-extrabold leading-tight ${className || ''}`}>{text}</h3>
    )
}
