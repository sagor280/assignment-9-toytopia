import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Routs/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />

     
      <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
