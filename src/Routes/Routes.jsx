import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import ProducsDetails from "../Pages/ProducsDetails";
import Loading from "../Loading/Loading";






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,

    children: [
      {
        path: '/',
        element: <Home />,
       hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('../data.json')
      },
      {
    path: "/products",
    element: <Products/>,
      hydrateFallbackElement: <Loading></Loading>,
    loader: () => fetch('../data.json')
  },
      {
        path: '/home',
        element: <Home />,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('../data.json')
      },
      {
        path: '/installation',
        element: <Installation />,
         hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('../data.json')
      },
      {
        path: '/product/:id',
        element: <ProducsDetails/>,
         hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch('../data.json')
      },
    ],
  },
 
  
]);

export default router