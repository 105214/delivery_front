import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/shared/Login";
import UserSignUP from "../pages/user/userSignup";
import Userlayout from "../layout/userLayout";



const router=createBrowserRouter([

    {
    path:"",
  element:<Userlayout/>,

  children:[
    {
        path:"",
        element:"<h1>home<h1/>"
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"signup",
        element:<UserSignUP/>
    }
  ]
    },
    
])

export default router