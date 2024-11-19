import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import victoria from "../assets/victoria.png";
import bruno from "../assets/bruno.png";
import leonardo from "../assets/leonardo.png";
import udo from "../assets/udo.png";
import wagner from "../assets/wagner.png";

const Carroussel = () => {
  return (
    <div>
      <div className="flex relative">
        <h1 className="uppercase text-[#E6E6E6] font-poppins font-extrabold text-2xl md:text-4xl text-start px-10 md:px-20 mb-16 border-b border-b-[#E6E6E6] w-full">
          Saiba quem são
          <br /> nossos palestrantes
        </h1>
      </div>

      <div className="w-full">
        <Swiper
          className="w-full max-w-[1500px] mx-auto"
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          navigation={true}
          speed={1000}
          loop={false}
          allowTouchMove={true}
          breakpoints={{
            1280: { slidesPerView: 4, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
            600: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          <SwiperSlide className="place-items-center">
            <img src={victoria} className="w-40 md:w-60" alt="betfive" />
          </SwiperSlide>
          <SwiperSlide className="place-items-center">
            <img src={bruno} className="w-40 md:w-60" alt="sportsbet" />
          </SwiperSlide>
          <SwiperSlide className="place-items-center">
            <img src={leonardo} className="w-40 md:w-60" alt="sortebet" />
          </SwiperSlide>
          <SwiperSlide className="place-items-center">
            <img src={udo} className="w-40 md:w-60" alt="jetbet" />
          </SwiperSlide>
          <SwiperSlide className="place-items-center">
            <img src={wagner} className="w-40 md:w-60" alt="B2XBET" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carroussel;
