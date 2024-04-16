// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="brightness-50 rounded-3xl "
      >
        <SwiperSlide className="relative">
          <img
            className="rounded-3xl"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-3xl"
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-[48%] z-[1] text-[#f5f8fc] text-center mx-auto md:max-w-6xl">
        <h1 className=" md:text-5xl  font-bold  my-10 hidden md:inline-block w-[70%]">
          Discover Your Perfect Residence with CasaQuest
        </h1>
        <p className="w-[50%] mx-auto hidden md:inline-block">
          Step into a world of endless possibilities where your dream home
          awaits. At CasaQuest, we are dedicated to turning your vision of home
          into reality. Explore our curated selection of premier residential
          properties, each offering unparalleled comfort, luxury, and serenity.
        </p>
      </div>
    </>
  );
};

export default Banner;
