import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const UserNav = () => {
  return (
    <>
      <div className="flex justify-center items-center mr-4">
      <DropdownMenu></DropdownMenu>
        <Link className="text-[#F8AF24]" to={"/cart"}>
          <FaShoppingCart size={30}></FaShoppingCart>
        </Link>
      </div>
    </>
  );
};

export default UserNav;