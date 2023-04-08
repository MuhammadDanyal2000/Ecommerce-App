import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return 
    <div className="Navbar">
        <div className="Links">
            <Link to="/">Shop</Link>
            <Link to="/cart">
                Cart
            </Link>
        </div>
    </div>
}
export default Navbar;