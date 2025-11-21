"use client"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "./fetchMenu";
import SectionSwiper from "./sectionSwiper";
import ItemCard from "./itemCard";

export default function MenuPage() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["menu"],
        queryFn: fetchMenu
    });

    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching menu</div>;

    const sections = data.sections;

    const activeItems =
        sections.find((s) => s.id === selectedSection)?.items || [];

    return (
        <div className="space-y-6">

            {/* ==== Sections Swiper ==== */}
            <SectionSwiper
                sections={sections}
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
