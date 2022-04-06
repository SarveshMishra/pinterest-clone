import React from 'react'
import {Navbar} from "../components/Navbar/Navbar.jsx";
import {User_ProfilePage} from "./User_ProfilePage";
import { useSelector } from 'react-redux';

export const Business = () => {
  const userData = useSelector((state) => state.user.user_data);
  console.log(userData);
  
  return (
    <>
    <Navbar/>
    <User_ProfilePage/>
    </>
  )
}
