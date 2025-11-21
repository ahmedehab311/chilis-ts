interface MenuItemProps { 
    name:string;
    className?:string
}

export default function MenuItem({ name ,className}:MenuItemProps) {
    return (
        <p className={`font-brother text-lg ${className || ''}`}>{name}</p>
    )
}
