interface SubtitleProps { 
    name:string;
    className?:string
}

export default function Subtitle({ name ,className}:SubtitleProps) {
    return (
        <h4 className={`font-brother text-lg ${className || ''}`}>{name}</h4>
    )
}
