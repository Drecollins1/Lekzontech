// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import OutletPage from "./component/Outlet";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

import PrivacyPolicy from "./component/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutletPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      // {
      //   path: "/projects",
      //   element: <Project />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      // { 
      //   path: "/portfolio",
      //   element: <Portfolio /> 
      // },
      // {
      //   path: "/product-design",
      //   element: <ProductDesign />,
      // },
      // {
      //   path: "/web-development",
      //   element: <WebDevelopment />,
      // },
      // {
      //   path: '/graphic-design',
      //   element: <GraphicDesign/>
      // },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      },
      // {
      //   path: '/terms',
      //   element: <PrivacyPolicy /> 
      // },
      // {
      //   path: '/partners',
      //   element: <PrivacyPolicy /> 
      // },
      // {
      //   path: '/sitemap',
      //   element: <PrivacyPolicy /> 
      // },
      
      // {
      //   path: "*",
      //   element: <Notfound />
      // }
    ],
  },
], {
 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <ChakraProvider>
      <OutletPage />
    </ChakraProvider>
  </RouterProvider>
);
