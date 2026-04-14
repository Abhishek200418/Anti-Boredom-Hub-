import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "../Components/NavigationBar/Navigation";
import Home from "../pages/Home/Home";
import Favorites from "../pages/ Favorites/ Favorites";
import Activities from "../pages/Activities/Activities";
import Tasks from "../pages/Tasks/Tasks";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";

function Approuter(){
    return(
    <BrowserRouter>
        <Routes>

            {/* PUBLIC */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            {/* PROTECTED */}
            <Route path="/" element={
                <ProtectedRoute>
                    <>
                        <Navigation/>
                        <Home/>
                    </>
                </ProtectedRoute>
            }/>

            <Route path="/favorites" element={
                <ProtectedRoute>
                    <>
                        <Navigation/>
                        <Favorites/>
                    </>
                </ProtectedRoute>
            }/>

            <Route path="/activities" element={
                <ProtectedRoute>
                    <>
                        <Navigation/>
                        <Activities/>
                    </>
                </ProtectedRoute>
            }/>

            <Route path="/task" element={
                <ProtectedRoute>
                    <>
                        <Navigation/>
                        <Tasks/>
                    </>
                </ProtectedRoute>
            }/>

        </Routes>
    </BrowserRouter>
    )
}

export default Approuter;