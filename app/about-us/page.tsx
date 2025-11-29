"use client";

import Image from "next/image";
import img from "@/public/images/main-DgUiu4SL.jpg";
import ParagraphWrapper from "../components/typography/paragraphText";
export default function ReadMorePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10">
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={img}
                            alt="Chili's Story"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-orange-600"></h2>

                    <ParagraphWrapper className="text-gray-700 leading-relaxed mb-4">
                        We are Chili’s. We are THE undisputed Champions of Living Deliciously. We invented casual dining 50 years ago in Dallas, Texas.
                        Since then, we have become a cultural phenomenon with over 1,500 restaurants around the world. We believe in making the most of
                        every day, with great vibes, great company, great drinks, and great food infused with our Texas roots and Southwest American style.   So, order the crispers, dip it in our house-made ranch, grab an Oldtimer with cheese, and if you crave attention, we recommend our
                        sizzling fajitas and a hand-shaken margarita. Our flavorful list is long, and life is short. Go on and Live Deliciously.
                    </ParagraphWrapper>

                  
                </div>
            </div>
        </section>
    );
}
