import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home";
import NotFound from "../Components/NotFound";
import PeopleParametro from "../Components/PeopleParametro";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/:id" element={<PeopleParametro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
