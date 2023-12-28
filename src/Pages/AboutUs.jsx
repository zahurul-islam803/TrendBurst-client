import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>TrendBurst - About Us</title>
      </Helmet>
      <div className="bg-[#FCF6F6] mt-[85px] pt-8">
        <div className="flex flex-col lg:flex-row justify-center gap-32 px-2">
          <div className="lg:ml-20 flex-1 lg:px-20 mt-32">
            <h1 className="text-4xl font-medium mb-2">ABOUT US</h1>
            <p className="justify-start">
              Discover the epitome of style at TrendBurst, where every click
              unlocks a world of chic possibilities. Our online haven showcases
              the latest trends in fashion, accessories, and beyond, ensuring
              you stay ahead with unbeatable prices. Seamlessly navigate our
              platform for a stress-free shopping experience.
            </p>
            <img
              src="https://i.ibb.co/4Nsdvww/intro-left.png"
              className="lg:mt-[130px]"
              alt="banner"
            />
          </div>
          <div className="lg:mr-40">
            <img src="https://i.ibb.co/Qk6dXNP/intro-right.png" alt="banner" />
          </div>
        </div>
      </div>
      <div className="bg-[#F0FCFC] pt-10 pb-14">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-32 px-2">
          <div className="lg:mr-40">
            <img
              src="https://i.ibb.co/C04pvGb/srevice-left-img.png"
              alt="banner"
            />
          </div>
          <div className="space-y-3">
            <p>100% GUARANTEED PURE COTTON</p>
            <h1 className="text-4xl font-medium mb-2">
              BEST PRODUCTS HERE <br /> EVERY DAY
            </h1>
            <p className="justify-start">
              Discover the epitome of style at TrendBurst <br /> where every
              click unlocks a world of chic possibilities.
            </p>
            <button className="uppercase text-white btn bg-rose-500 rounded-badge hover:bg-rose-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-rose-500 text-4xl my-10 font-semibold">
          #Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mb-8">
          <div
            className="text-center space-y-2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src="https://i.ibb.co/qWF3nCw/1.jpg" alt="team image" />
            <div className="py-6">
              <h1 className="text-2xl">HOWARD BURNS</h1>
              <p>OUR TEAM</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-white border-t-2">
              <div className="bg-black p-4">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="bg-black p-4">
                <FaTwitter></FaTwitter>
              </div>
              <div className="bg-black p-4">
                <TfiWorld></TfiWorld>
              </div>
              <div className="bg-black p-4">
                <FaPinterestP></FaPinterestP>
              </div>
            </div>
          </div>
          <div
            className="text-center space-y-2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src="https://i.ibb.co/HH3s7QB/2.jpg" alt="team image" />
            <div className="py-6">
              <h1 className="text-2xl">LESTER HOUSER</h1>
              <p>OUR TEAM</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-white border-t-2">
              <div className="bg-black p-4">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="bg-black p-4">
                <FaTwitter></FaTwitter>
              </div>
              <div className="bg-black p-4">
                <TfiWorld></TfiWorld>
              </div>
              <div className="bg-black p-4">
                <FaPinterestP></FaPinterestP>
              </div>
            </div>
          </div>
          <div
            className="text-center space-y-2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src="https://i.ibb.co/LRJhCdg/3.jpg" alt="team image" />
            <div className="py-6">
              <h1 className="text-2xl">CRAIG CHANEY</h1>
              <p>OUR TEAM</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-white border-t-2">
              <div className="bg-black p-4">
                <FaFacebookF></FaFacebookF>
              </div>
              <div className="bg-black p-4">
                <FaTwitter></FaTwitter>
              </div>
              <div className="bg-black p-4">
                <TfiWorld></TfiWorld>
              </div>
              <div className="bg-black p-4">
                <FaPinterestP></FaPinterestP>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center gap-4 lg:gap-0">
          <div
            className="bg-white h-32 w-96"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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
          <div
            className="bg-white h-32 w-96"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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
          <div
            className="bg-white h-32 w-96"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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
    </>
  );
};

export default AboutUs;