import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Component/Home";
import MyProfile from "../Component/MyProfile";
import WishList from "../Component/AllToys";
import ErrorPage from "../Page/ErrorPage";
import AllToys from "../Component/AllToys";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../LayOut/AuthLayout";
import ToysDetails from "../Page/ToysDetails";

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayOut></HomeLayOut>,
            children:[
                {
                    index:true,
                    element:<Home></Home>,
                    loader:()=>fetch("/toysData.json"),
                },
                {
                    path:"/profile",
                    element:<MyProfile></MyProfile>
                },
                {
                    path:"/toys",
                    element:<AllToys></AllToys>
                }
            ]
        },
        {
            path: '/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,
                },
            ]
        },
        {
            path:'/toys-details/:id',
            element:<ToysDetails></ToysDetails>,
             loader:()=>fetch("/toysData.json"),
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>,
        }
    ]
)
export default router;