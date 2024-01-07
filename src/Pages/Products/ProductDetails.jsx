import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className=" max-w-screen-xl mx-auto">
      <Helmet>
        <title>TrendBurst | Products - Details</title>
      </Helmet>
      <div className="bg-[#FCF6F6] py-28 mt-20">
        <h1 className="text-5xl text-center font-medium">Product</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mt-[85px]">
        <figure>
          <img
            src={product.product_img}
            className="h-[550px] w-[420px]"
            alt="fashion product image"
          />
        </figure>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold">{product.product_name}</h2>
          <h2 className="text-rose-500 text-2xl font-medium">
            ${product.price}
          </h2>
          <h2>({product.review} customer review)</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
