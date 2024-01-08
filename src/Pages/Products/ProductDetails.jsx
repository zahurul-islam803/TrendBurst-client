import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { addToCart } from "../../Api/product";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const product = useLoaderData();
  const {user} = useAuth();
  const handleAddToCart = async()=>{
    if(user){
      const cartItem = {
        productId: product._id,
        userEmail: user.email,
        productName: product.product_name,
        productImage: product.product_img,
        productPrice: product.price,
      }
      try {
        await addToCart(cartItem);
        toast.success(`${product.product_name} has been added in the cart!`)
      } catch (error) {
        toast.error('something went wrong', error)
      }
    }
  }
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
          <div className="flex">
            <button onClick={handleAddToCart} className="btn btn-wide bg-black text-white hover:bg-rose-500">
              Add To Cart
            </button>
            <button className="btn bg-black hover:bg-rose-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
