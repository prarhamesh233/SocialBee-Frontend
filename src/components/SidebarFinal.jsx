import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";
import SideBar from "./Sidebar";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

function SidebarFinal(){
  
    return (
        <div>
         <SideBar />
        <Routes >
        
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/profile" element={<Profile></Profile>} />
        <Route exact path="/explore" element={<Explore></Explore>} />
        <Route path="/search" element={<Search></Search>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

        </Routes>
        </div>
    )
}
export default SidebarFinal;