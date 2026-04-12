import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navigation from "../Components/NavigationBar/Navigation";
import Home from "../pages/Home/Home";
import Favorites from "../pages/ Favorites/ Favorites";
import Activities from "../pages/Activities/Activities";
import Tasks from "../pages/Tasks/Tasks";
function Approuter(){
    return(
    <BrowserRouter>
        <div>
            <Navigation/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/activities" element={<Activities/>}/>
                <Route path="/task" element={<Tasks/>}/>
                
            </Routes>
        </div>
    </BrowserRouter>
    )
}
export default Approuter;