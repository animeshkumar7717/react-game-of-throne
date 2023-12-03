import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import Search from "./search";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}></Route>
            <Route path='/character' element={<Main />}></Route>
            <Route path='/character/:search' element={<Search />}></Route>
        </Routes>
    )
}

export default Pages;
