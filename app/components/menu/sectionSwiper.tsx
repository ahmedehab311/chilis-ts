"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Section } from "./types";
import Image from "next/image";
import { Subtitle } from "../typography";

interface SectionSwiperType {
  sections: Section[] | undefined;
  onSelect: (id: null | null) => void
}
export default function SectionSwiper({ sections, onSelect }: SectionSwiperType) {
  return (
    <Swiper slidesPerView={4} modules={[Navigation, Autoplay]} spaceBetween={10} navigation={true}
      loop={true}
      breakpoints={{
        1280: { slidesPerView: 4 }, // xl screens
        1024: { slidesPerView: 3 }, // lg screens
        768: { slidesPerView: 2 },  // md screens
        0: { slidesPerView: 1 },    // sm screens
      }}>
      {sections?.map((section: any) => (
        <SwiperSlide key={section.id}>
          <div
            onClick={() => onSelect(section.id)}
            className="w-full  rounded-xl bg-darkBlue shadow p-4 hover:shadow-lg transition cursor-pointer"
          >
            <Subtitle text={section.name_en} className=" mb-4 uppercase text-white text-center " />

            <Image
              width={390}
              height={261}
              alt="sectionImage"
              src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${section?.image}`}
              className="w-full h-[261px] object-cover rounded-md"
            />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
