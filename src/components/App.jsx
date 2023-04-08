import React from "react";
import { ReactDOM } from "react";
import { Router, Routes } from "react-router-dom";
import Navbar from "./navbar"

function App(){
    return
    <div className="App">
        <Routers>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Navbar/>}> </Route>
                <Route path="/cart" element={<Navbar/>}> </Route>
            </Routes>
        </Routers>
    </div>
}
export default App