import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Explore from "./Explore";

import SideBar from "./Sidebar";

import Search from "./Search";

function SidebarFinal(){
  
    return (
        <div>
         <SideBar />
        <Routes >
        
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/profile" element={<Profile></Profile>} />
        <Route exact path="/explore" element={<Explore></Explore>} />
        <Route path="/search" element={<Search></Search>} />
        </Routes>
        </div>
    )
}
export default SidebarFinal;