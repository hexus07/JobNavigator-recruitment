// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.jsx";
import CompanyDetail from "../pages/CompanyDetail.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/company/:id",
    element: <CompanyDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
