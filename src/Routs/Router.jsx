import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Component/Home";
import MyProfile from "../Component/MyProfile";
import ErrorPage from "../Page/ErrorPage";
import AllToys from "../Component/AllToys";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../LayOut/AuthLayout";
import ToysDetails from "../Page/ToysDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ForgotPassword from "../Page/ForgotPassword";
import Loading from "../Page/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/toysData.json"),
        hydrateFallbackElement:<Loading></Loading>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
         loader: () => fetch("/toysData.json"),
         hydrateFallbackElement:<Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/toys-details/:id",
    element: (
      <PrivateRoute>
        <ToysDetails></ToysDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/toysData.json"),
    hydrateFallbackElement:<Loading></Loading>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;
