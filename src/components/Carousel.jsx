import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Carousel({ images = [] }) {
  const imgs = Array.isArray(images) ? images : [images];

  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <Swiper
        className="w-full"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        {...(imgs.length > 1 && { slidesPerView: 3 })}
        spaceBetween={2}
      >
        {imgs.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt="" className="w-full h-60 object-cover block" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
