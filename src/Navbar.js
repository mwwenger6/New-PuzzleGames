import {NavLink} from "react-router-dom";
import React from "react";

export const Navbar = () => {
    return (
    <nav className="nav-wrapper blue darken">
        <ul className="right">
            
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/puzzle">15 Tiles Game</NavLink></li>
            <li><NavLink to="/tower">Towers of Hanoi</NavLink></li>
        </ul>
        <div className="container">
            Computer Games
        </div>
    </nav>
    )
}