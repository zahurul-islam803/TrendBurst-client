
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#fcf6f6] py-24">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-around items-center">
            <img
              src="https://i.postimg.cc/5y5G0xVV/slider-2-2.png"
              className="h-[80vh]"
              alt="banner"
            />
            <div className="text-center p-2">
              <p className="text-lg text-gray-600 border-l-4 border-rose-500 mb-4 uppercase">Sale 30% off</p>
              <h1 className="lg:text-6xl text-4xl font-extrabold text-black mb-4">
                Exclusive New
              </h1>
              <h1 className="lg:text-6xl text-4xl font-extrabold text-black">
                Offer 2024
              </h1>
              <button className="mt-8 text-lg bg-gradient-to-r from-rose-400 to-rose-500 rounded-badge text-white my-4 px-8 py-4 bg-transparent">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#fcf6f6] py-24">
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-around items-center">
            <img
              src="https://i.postimg.cc/0NXdYrvf/slider-2-1.png"
              className="h-[80vh]"
              alt="banner"
            />
            <div className="text-center p-2">
              <p className="text-lg text-gray-600 border-l-4 border-rose-500 mb-4 uppercase">Sale 30% off</p>
              <h1 className="lg:text-6xl text-4xl font-extrabold text-black mb-4">
                Exclusive New
              </h1>
              <h1 className="lg:text-6xl text-4xl font-extrabold text-black">
                Offer 2024
              </h1>
              <button className="mt-8 text-lg bg-gradient-to-r from-rose-400 to-rose-500 rounded-badge text-white my-4 px-8 py-4 bg-transparent">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
