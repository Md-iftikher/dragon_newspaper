import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import CatagoryNews from "../pages/CatagoryNews";
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout></HomeLayout>,
    children:[
        {
            path: "",
            element: <Navigate to="catagory/01" replace />
        },
        {
            path: "catagory/:id",
            element: <CatagoryNews></CatagoryNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

        },
    ]
  },
  {
    path:"/news",
    element:<h1>news layout</h1>
  },
  {
    path:"/auth",
    element:<h1>login</h1>
  },
  {
    path:"*",
    element:<h1>Error</h1>
  }
]);

export default router;
