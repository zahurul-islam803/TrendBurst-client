import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <div className="flex justify-center items-center mr-4">
        <NavLink
          to="/signIn"
          className={({ isActive }) =>
            isActive ? "text-lg text-rose-500 underline mr-8" : "text-lg mr-8"
          }
        >
          SignIn
        </NavLink>
        <Link className="text-[#F8AF24]" to={"/cart"}>
          <FaShoppingCart size={30}></FaShoppingCart>
        </Link>
      </div>
    </>
  );
};

export default UserNav;