import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [refetch, cart] = useCart();
  return (
    <div className="mt-20">
      <Helmet>
        <title>TrendBurst - Cart</title>
      </Helmet>
      <h1>cart {cart.length}</h1>
    </div>
  );
};

export default Cart;