import { FaShoppingCart } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import useCart from "../../Hooks/useCart";

const UserNav = () => {
  const [refetch, cart] = useCart();
  return (
    <>
      <div className="flex justify-center gap-3 items-center mr-4">
        <DropdownMenu></DropdownMenu>
        <Link className="text-rose-500" to={"/wishList"}>
          <LuHeart size={30}></LuHeart>
        </Link>
        <Link className="text-[#F8AF24]" to={"/cart"}>
          <FaShoppingCart size={30}></FaShoppingCart>
          <div className="badge badge-sm badge-error text-white absolute bottom-14">
            +{cart.length}
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserNav;