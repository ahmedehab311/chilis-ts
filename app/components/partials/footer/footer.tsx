import { Mail, Phone } from "lucide-react"
export default function Footer() {
    return (
        <footer className="bg-ChilisRed text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4 mt-[170px]">
            <div className="flex gap-1">
                <Phone size={16} color="#fff" />
                <span> 19002</span>
            </div>

            <div className="flex items-center gap-2">
                <span>All rights reserved to Chili’s Egypt</span>
            </div>

            <div className="flex gap-1">
                <span><Mail size={16} color="#ffffff" /></span>
                <a >
                    chilis@eliteline-eg.com
                </a>
            </div>
        </footer>

    )
}
