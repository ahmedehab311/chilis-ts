"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SectionSwiper({ sections, onSelect }: any) {
  return (
    <Swiper slidesPerView={3} spaceBetween={10}>
      {sections.map((section: any) => (
        <SwiperSlide key={section.id}>
          <button
            onClick={() => onSelect(section.id)}
            className="w-full rounded-xl bg-white shadow p-2 hover:shadow-lg transition"
          >
            <img
              src={section.image}
              className="w-full h-32 object-cover rounded-md"
            />
            <p className="text-center font-semibold mt-2">
              {section.name}
            </p>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
