import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOut/HomeLayOut";
import Home from "../Component/Home";
import MyProfile from "../Component/MyProfile";
import WishList from "../Component/WishList";
import ErrorPage from "../Page/ErrorPage";

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayOut></HomeLayOut>,
            children:[
                {
                    index:true,
                    element:<Home></Home>
                },
                {
                    path:"/profile",
                    element:<MyProfile></MyProfile>
                },
                {
                    path:"/wishlist",
                    element:<WishList></WishList>
                }
            ]
        },
        {
            path: '/auth',
            element:<h2>Authentication Layout</h2>,
        },
        {
            path:'/toys',
            element:<h2>Toys Layout</h2>
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>,
        }
    ]
)
export default router;