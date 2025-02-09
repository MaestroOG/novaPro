import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Carousel = () => {
    return (
        <div className="flex justify-center items-center">
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="w-[80%] h-[400px] mySwiper"
            >
                {[1, 2, 3].map((item, index) => (
                    <SwiperSlide key={index} className="w-[300px] h-[400px] swiper-slide-custom">
                        <div className="h-full w-full rounded-2xl bg-purple-800 from-green-500 to-black shadow-lg flex justify-center items-center">
                            <h2 className="text-white text-xl font-semibold">Slide {item}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
