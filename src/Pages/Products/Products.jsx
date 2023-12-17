import {
  useQuery,} from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";
import { getAllProduct } from "../../Api/product";
const Products = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getAllProduct,
  });

  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (isError) {
    return console.log(isError, error);
  }
  return (
    <div>
      <Helmet>
        <title>TrendBurst - Products</title>
      </Helmet>
      <h1 className="mt-8 text-rose-500 text-center text-6xl font-extrabold">
        products
      </h1>
      <p className="text-center text-2xl mb-8 text-rose-400">
        --------------------------------------
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto p-2">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
