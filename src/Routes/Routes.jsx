import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import ProducsDetails from "../Pages/ProducsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
     hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../data.json')
      },
      {
    path: "/products",
    element: <Products/>,
    loader: () => fetch('../data.json')
  },
      {
        path: '/home',
        element: <Home />,
        loader: () => fetch('../data.json')
      },
      {
        path: '/installation',
        element: <Installation />,
        loader: () => fetch('../data.json')
      },
      {
        path: '/product/:id',
        element: <ProducsDetails/>,
        loader: () => fetch('../data.json')
      },
    ],
  },
 
  
]);
export default router