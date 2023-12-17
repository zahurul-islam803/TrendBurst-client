import Banner from "../../Components/Header/Banner";
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
    </>
  );
};

export default Home;