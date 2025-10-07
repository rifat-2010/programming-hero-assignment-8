import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
     hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
    path: "/products",
    element: <Products></Products>,
    loader: () => fetch('../data.json')
  },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/installation',
        element: <Installation />,
      },
    ],
  },
 
  
]);
export default router