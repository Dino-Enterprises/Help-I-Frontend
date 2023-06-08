import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

function CarouselVids() {
  return (
    <div className="bg-[#161816]">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1500,
        }} className="h-[100%] w-[80%] flex justify-center items-center"
      >
        <SwiperSlide>
          <img src={"../images/guide_1.png"} className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/guide_2.png"} className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/guide_3.png"} className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/guide_4.png"} className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/guide_5.png"} className="rounded-xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/guide_6.png"} className="rounded-xl"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CarouselVids