import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/e-commerce/Layout";
import Product from "./components/e-commerce/products";
import { ErrorPage } from "./components/router-pages/error";
import { Cart } from "./components/e-commerce/cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'products',
            element:<Product/>
        },
        {
            path:'cart',
            element:<Cart/>
        }
        
      ]
    },
]);


