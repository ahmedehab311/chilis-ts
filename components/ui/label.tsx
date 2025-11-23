interface LabelProps {
    text: string;
    className?: string
}

export default function Label({ text, className }: LabelProps) {
    return (
        <label className={`font-cairo block mb-1 font-medium capitalize ${className || ''}`}>{text}</label>
    )
}
