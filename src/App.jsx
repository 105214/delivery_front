import { useState } from 'react'
import Login from './pages/shared/Login.jsx'
import UserSignUP from './pages/user/userSignup.jsx';
import router from './routes/router.jsx'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {


  return (
    <>
    <RouterProvider router={router} />
      {/* <Login/> */}
       {/* <SignUp/>  */}
    </>
  )
}

export default App
