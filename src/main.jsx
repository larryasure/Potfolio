import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Roots/RootLayout";
import Home from "./Pages/Home";
import Error404 from "./components/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [{ index: true, Component: Home },

      {path: "*", Component: Error404}
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
