import { useQuery } from '@tanstack/react-query'
import { fetchIamgeSlider } from './apisSliderHero'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";  
import img from '@/public/images/bigBackground.png'
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';
import { BASE_URL_images } from '@/api/setting';

export default function Hero() {
    const {
        data: sliderImages,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['sliderImages'],
        queryFn: fetchIamgeSlider
    })
    const sliderHeight = "h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]";
    return (
        <div className={`relative w-full bg-cover bg-center bg-no-repeat ${sliderHeight}`}
            style={{ backgroundImage: `url(${img.src})` }}
        >
            <div className="absolute inset-0 bg-black/30" />

            <div className={`relative z-10 w-full ${sliderHeight} flex justify-center items-center`}>
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center text-white text-xl">
                        Loading...
                    </div>
                ) : (
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        className="w-full h-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] swiper-hero"
                    >
                        {sliderImages.map((item: any) => (
                            <SwiperSlide key={item.id} className="h-full flex justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src={`${BASE_URL_images}${item.image}`}
                                    className="w-auto h-full object-contain rounded-xl shadow-lg"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    )
}
