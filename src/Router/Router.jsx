import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Products/Products";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import Registration from "../Pages/Authentication/Registration";
import Login from "../Pages/Authentication/Login";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/Products/ProductDetails";
import { getSingleProduct } from "../Api/product";
import CheckOut from "../Pages/Cart/CheckOut";

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
        path: "checkOut",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "product/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => getSingleProduct(params.id),
      },
    ],
  },
  {
   path: '/signUp',
   element: <Registration></Registration>
  },
  {
   path: '/signIn',
   element: <Login></Login>
  }
]);

export default router;
