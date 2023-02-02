import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";


const Router=()=>{
 return(
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
     </Routes>
        </BrowserRouter>
 )
}

export default Router;



