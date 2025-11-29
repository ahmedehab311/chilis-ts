"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/main-DgUiu4SL.jpg";
import { Title } from "../typography";
import { Button } from "@/components/ui/button";
import ParagraphWrapper from "../typography/paragraphText";


export default function AboutUs() {
    return (
        <section className={`max-w-6xl mx-auto px-4 py-12 `}>
            <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative w-full h-64 md:h-100 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={img}
                            alt="About Us Image"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-auto md:h-96 flex flex-col justify-between">

                    <div>
                        <div className="flex items-center gap-2">
                            <Title text="chili’s " className="font-BlackFont" />
                            <Title text="Egypt" className="text-ChilisRed! font-BlackFont" />
                        </div>

                        <Title text="for getting real transparent" className="my-1 font-BlackFont" />

                        <h4 className="text-lg font-semibold mb-4 font-tahoma tracking-[5px] leading-[2rem] text-[rgb(85,85,85)]">
                            our story
                        </h4>

                        <ParagraphWrapper className="text-gray-700 leading-relaxed mb-4">
                            We are Chili’s. We are THE undisputed Champions of Living Deliciously.
                            We invented casual dining 50 years ago in Dallas, Texas. Since then, we
                            have become a cultural phenomenon with over 1,500 restaurants around the
                            world. We believe in making the most of every day, with great vibes, great
                            company, great drinks, and great food infused with our Texas roots and
                            Southwest American style.
                        </ParagraphWrapper>
                    </div>

                    <Link href="/about-us" className="inline-block">
                        <Button className="buttonCili">Read more</Button>
                    </Link>
                </div>

            </div>
        </section>


    );
}
