import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        Products
      </NavLink>
    </>
  );
};

export default Navlinks;