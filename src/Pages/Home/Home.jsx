import Banner from "../../Components/Header/Banner";
import Deals from "../Products/Deals";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div className="mt-[90px]">
        <Banner></Banner>
      </div>
      <div>
      <Products></Products>
      </div>
      <div>
        <Deals></Deals>
      </div>
    </>
  );
};

export default Home;