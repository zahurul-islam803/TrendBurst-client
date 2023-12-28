import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>TrendBurst - About Us</title>
      </Helmet>
      <div className="bg-rose-100 mt-[85px] pt-8">
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
    </>
  );
};

export default AboutUs;