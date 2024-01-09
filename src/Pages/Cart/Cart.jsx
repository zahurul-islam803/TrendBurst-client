import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { FaPen } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Cart = () => {
  const [refetch, cart] = useCart();
  return (
    <>
      <Helmet>
        <title>TrendBurst - Cart</title>
      </Helmet>
      <div className="bg-[#FCF6F6] py-28 mt-20">
        <h1 className="text-5xl text-center font-medium">Shop</h1>
      </div>
      <div className="overflow-x-auto max-w-screen-xl mx-auto mt-10">
        <h1 className="text-2xl font-semibold my-4">Your Cart Items</h1>
        <table className="table border border-gray-200">
          {/* head */}
          <thead className="bg-gray-200">
            <tr className="lg:text-lg text-black font-semibold uppercase">
              <th>Image</th>
              <th>Product Name</th>
              <th className="hidden md:block">Unit price</th>
              <th>QTY</th>
              <th>SubTotal</th>
              <th className="hidden md:block">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((cartData) => (
              <tr key={cartData._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle lg:w-20 w-14 lg:h-20 h-14">
                      <img src={cartData.productImage} alt="product image" />
                    </div>
                  </div>
                </td>
                <td>{cartData.productName}</td>
                <td className="hidden md:block">${cartData.productPrice}</td>
                <td>1</td>
                <td>${cartData.productPrice}</td>
                <td className="hidden md:block">
                  <div className="flex items-center gap-3">
                    <FaPen></FaPen>
                    <RxCross2></RxCross2>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;