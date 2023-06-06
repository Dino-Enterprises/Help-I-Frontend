import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <div className="h-[400px] bg-[#161816]">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
        }} className="h-[100%] w-[50%] images-center"
      >
        <SwiperSlide>
          <img src={"../images/swiper_1.jpeg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/swiper_2.jpeg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/swiper_3.jpeg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/swiper_4.jpeg"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel