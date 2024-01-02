import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Header/Banner";
import Blog from "../Products/Blog";
import Deals from "../Products/Deals";
import Products from "../Products/Products";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>TrendBurst - Fashion E-Commerce</title>
      </Helmet>
      <div className="mt-[86px]">
        <Banner></Banner>
      </div>
      <div>
        <Products></Products>
      </div>
      <div>
        <Deals></Deals>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </>
  );
};

export default Home;