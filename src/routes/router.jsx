import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/shared/Login";
import SignUp from "../pages/shared/signUp";



const router=createBrowserRouter([
    {
path:"login",
element:<Login/>,
},{
path:"signup",
element:<SignUp/>
}

])

export default router