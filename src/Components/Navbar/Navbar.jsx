import { Outlet } from "react-router-dom";
import Navlinks from "./Navlinks";
import logo from '../../assets/logo.png'
import UserNav from "./UserNav";
const Navbar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar fixed bg-white shadow-lg">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img src={logo} alt="logo" className="w-[80px]" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <Navlinks></Navlinks>
              </ul>
            </div>
            <div className="flex-1 justify-end">
             <UserNav></UserNav>
            </div>
          </div>
          {/* Page content here */}
          <div className="min-h-[calc(100vh-20px)]">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full text-center bg-white shadow-lg">
            {/* Sidebar content here */}
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;