import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-lg text-rose-500 underline mr-8" : "text-lg mr-8"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-lg text-rose-500 underline mr-8" : "text-lg mr-8"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-lg text-rose-500 underline mr-8" : "text-lg mr-8"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-lg text-rose-500 underline mr-8" : "text-lg mr-8"
        }
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default Navlinks;