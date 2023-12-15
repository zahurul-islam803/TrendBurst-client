import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Products/Products";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import SignIn from "../Pages/User/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
   path: '/signIn',
   element: <SignIn></SignIn>
  }
]);

export default router;
