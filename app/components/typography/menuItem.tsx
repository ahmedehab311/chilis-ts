interface MenuItemProps {
    name: string;
    className?: string
    children: React.ReactNode
}

export default function MenuItem({ name, children, className }: MenuItemProps) {
    return (
        <p className={`font-brother text-lg text-black ${className || ''}`}>{name}{children}</p>
    )
}
