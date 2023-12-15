import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
      index: true,
      element: <Home></Home>
    },
    {
    path:'cart',
    element: <Cart></Cart>
    }
    ]
  },
]);

export default router;