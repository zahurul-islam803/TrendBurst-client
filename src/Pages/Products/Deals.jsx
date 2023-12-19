
import Countdown from "react-countdown";

const Deals = () => {  
  return (
    <div
      className="md:flex justify-evenly items-center gap-6 py-20 w-full my-8"
      style={{
        backgroundImage: "url(https://i.ibb.co/SrkRkm8/deal-bg-2.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center space-y-4">
        <h1 className="uppercase text-rose-500 text-2xl font-semibold">
          Fashion Shop
        </h1>
        <h2 className="text-black text-4xl font-bold">Deal Of The Day</h2>
        <div className="my-4">
          <Countdown
            className="text-4xl font-bold"
            date={Date.now() + 176500000}
          />
        </div>
        <p className="uppercase text-sm font-medium">Days : Hour : Min : Sec</p>
        <button className="uppercase text-white btn bg-rose-500 rounded-badge hover:bg-rose-600">
          Shop Now
        </button>
      </div>
      <div>
        <img src="https://i.postimg.cc/L6RVPLVv/woman.png" alt="" />
      </div>
    </div>
  );
};

export default Deals;
