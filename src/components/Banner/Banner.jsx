import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper/modules";
import banner1 from "../../../public/banner/banner-1.jpg";
import banner2 from "../../../public/banner/banner-2.jpg";
import banner3 from "../../../public/banner/banner-3.jpg";
import banner4 from "../../../public/banner/banner-4.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
        }}
      >
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[600px] lg:h-[600px]"
            src={banner1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[600px] lg:h-[600px]"
            src={banner2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[600px] lg:h-[600px]"
            src={banner3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[200px] md:h-[600px] lg:h-[600px]"
            src={banner4}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
