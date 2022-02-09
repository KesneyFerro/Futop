import React from "react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "./styles.css";

// import required modules

const SliderMenu = () => {
  return (
    <div className="flex flex-row mb-10 gap-x-10 overflow-x-scroll ml-[3%]">
      <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] min-w-[400px] h-[200px]">
        Slide 1
      </div>
      <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] min-w-[400px] h-[200px]">
        Slide 1
      </div>
      <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] min-w-[400px] h-[200px]">
        Slide 1
      </div>
      <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] min-w-[400px] h-[200px]">
        Slide 1
      </div>
      <div className="mr-10 flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] min-w-[400px] h-[200px]">
        Slide 1
      </div>
    </div>
    // <Swiper
    //   // install Swiper modules
    //   modules={[Navigation, Scrollbar, A11y]}
    //   spaceBetween={3}
    //   slidesPerView={4}
    //   centeredSlides
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    // >
    //   <SwiperSlide>
    //     <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] h-[200px]">
    //       Slide 1
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] h-[200px]">
    //       Slide 2
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022]  w-[400px] h-[200px]">
    //       Slide 3
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <div className="flex justify-center items-center rounded-xl text-white font-medium bg-[#1e2022] w-[400px] h-[200px]">
    //       Slide 4
    //     </div>
    //   </SwiperSlide>
    //   ...
    // </Swiper>
  );
};

export default SliderMenu;
