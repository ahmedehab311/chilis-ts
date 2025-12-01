"use client"
import { useState } from "react";
import SectionSwiper from "./sectionSwiper";
import ItemCard from "./itemCard";
import { useGetMenu } from "@/hooks/useGetMenu";
import { Item } from "./types";
import { Title } from "../typography";
import StatusHandler from "@/lib/statusHandler";
import { Button } from "@/components/ui/button";
export default function MenuPage() {
    const { data, isLoading, isError, error } = useGetMenu()
    const [selectedSection, setSelectedSection] = useState<number | null>(null);

    const activeItems =
        data?.find((sctions) => sctions?.id === selectedSection)?.items || [];

    return (
        <div className="  mt-3 mx-3">
            <Title text="Menu" className="text-center" />
            {selectedSection !== null && (
                <div className="mb-3 ">
                    <Button className="bg-ChilisRed hover:bg-ChilisRedHover"
                        onClick={() => setSelectedSection(null)}
                    >
                        Back
                    </Button>
                </div>
            )}
            {selectedSection === null ? (
                <div className="h-[180px] w-full">
                    <StatusHandler
                        isLoading={isLoading}
                        error={isError}
                        isEmpty={data?.length === 0}
                        loadingMessage="Loading menu"
                        emptyMessage="No data for menu"
                        errorMessage="Error loading menu"
                    >
                        <SectionSwiper
                            sections={data}
                            onSelect={setSelectedSection}
                        />
                    </StatusHandler>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {activeItems.map((item: Item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}
