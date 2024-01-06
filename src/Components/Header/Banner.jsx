import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCardOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
            <div
              className="text-center p-2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-lg text-gray-600 border-l-4 border-rose-500 mb-4 uppercase">
                Sale 30% off
              </p>
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
            <div
              className="text-center p-2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <p className="text-lg text-gray-600 border-l-4 border-rose-500 mb-4 uppercase">
                Sale 30% off
              </p>
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
        <div className="lg:relative lg:bottom-14 lg:left-50% z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-0 justify-items-center content-center gap-4 lg:gap-0">
            <div className="bg-white h-32 w-96 border">
              <div className="flex justify-center items-center h-full gap-6">
                <div className="bg-rose-500 p-4 text-white rounded-full">
                  <LiaShippingFastSolid size={40}></LiaShippingFastSolid>
                </div>
                <div>
                  <h4 className="text-3xl font-medium mb-2">Free Shipping</h4>
                  <p>Capped at $39 per order</p>
                </div>
              </div>
            </div>
            <div className="bg-white h-32 w-96 border">
              <div className="flex justify-center items-center h-full gap-6">
                <div className="bg-rose-500 p-4 text-white rounded-full">
                  <IoCardOutline size={40}></IoCardOutline>
                </div>
                <div>
                  <h4 className="text-3xl font-medium mb-2">Card Payments</h4>
                  <p>12 Months Installments</p>
                </div>
              </div>
            </div>
            <div className="bg-white h-32 w-96 border">
              <div className="flex justify-center items-center h-full gap-6">
                <div className="bg-rose-500 p-4 text-white rounded-full">
                  <TbTruckReturn size={40}></TbTruckReturn>
                </div>
                <div>
                  <h4 className="text-3xl font-medium mb-2">Easy Returns</h4>
                  <p>Shop With Confidence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
