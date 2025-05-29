import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./NavigatorComponents/Contact";
import MainBody from "./Components/MainBody";
import About from "./NavigatorComponents/About";
import Work from "./NavigatorComponents/Work";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <Work />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
