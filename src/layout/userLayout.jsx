import React from 'react'
import Navbar from '../components/user.jsx/navBar'
import { Outlet,useLocation } from 'react-router-dom'
import axiosInstance from '../config/axiosinstance'
import Footer from '../components/user.jsx/footer'
import UserHeader from '../components/user.jsx/navBar'
function Userlayout() {
  return (
    <div>
        <UserHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Userlayout