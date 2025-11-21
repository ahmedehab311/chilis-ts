"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "./fetchMenu";
import SectionSwiper from "./sectionSwiper";
import ItemCard from "./itemCard";

export default function MenuPage() {
    const {
        data: menuItems = [],
        isLoading: loading,
        error,
    } = useQuery({
        queryKey: ["menuItems"],
        queryFn: fetchMenu,
        refetchOnWindowFocus: false,
    });


    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const activeItems =
        menuItems.find((s) => s.id === selectedSection)?.items || [];

    return (
        <div className="space-y-6">

            {/* ==== Sections Swiper ==== */}
            <SectionSwiper
                sections={menuItems}
                onSelect={setSelectedSection}
            />

            {/* ==== Items ==== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {activeItems.map((item: any) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>

        </div>
    );
}
