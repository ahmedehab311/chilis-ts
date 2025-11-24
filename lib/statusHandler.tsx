'use client'
import { useState, useEffect, use } from "react";
interface StatusHandlerProps {
    isOnline?: boolean;
    isLoading?: boolean;
    error?: any;
    isEmpty?: boolean;
    emptyMessage?: string;
    loadingMessage?: string;
    errorMessage?: string;
    children: React.ReactNode;
    isTable?: boolean;
    colSpan?: number;
    tableCellClassName?: string;
}

const StatusHandler = ({
    isOnline = true,
    isLoading = false,
    error = null,
    isEmpty = false,
    emptyMessage = "No data found",
    loadingMessage = "Loading",
    errorMessage = "Something went wrong",
    children,
    isTable = false,
    colSpan = 1,
    tableCellClassName = ''
}: StatusHandlerProps) => {
    const [dots, setDots] = useState<string>("");

    useEffect(() => {
        if (!isLoading) return;

        const interval = setInterval(() => {
            setDots(prev => (prev.length < 3 ? prev + "." : ""));
        }, 300);

        return () => clearInterval(interval);
    }, [isLoading]);

    const renderMessage = (message: string, color = "text-important") => {
        if (isTable) {
            return (
                <tr>
                    <td colSpan={colSpan} className={`h-24 text-center ${tableCellClassName}`}>
                        <span className={`${color} flex justify-center items-center text-lg`}>
                            {message}
                        </span>
                    </td>
                </tr>
            );
        } else {
            return (
                <div className={`w-full flex justify-center items-center py-3 text-lg ${color} capitalize`}>
                    {message}
                </div>
            );
        }
    };

    if (!isOnline) return renderMessage("🚨 Internet disconnected", "text-red-500");
    if (isLoading) return renderMessage(`${loadingMessage}${dots}`);
    if (isEmpty) return renderMessage(emptyMessage);
    if (error) return renderMessage(errorMessage, "text-red-500");

    return <>{children}</>;
};

export default StatusHandler;
