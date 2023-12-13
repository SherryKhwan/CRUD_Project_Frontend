// Navbar for the webapp

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";


const Navbar = () => {

    const { pathname } = useLocation();

    const [activeScreen, setActiveScreen] = useState(pathname)

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" onClick={() => setActiveScreen("/")} className="logo h5 m-0 font-color">
                    Awesome App
                </Link>
                <div className="nav-elements">
                    <ul className="m-0">
                        <li>
                            <Link className={activeScreen === "/" ? "active" : ""}
                                onClick={() => setActiveScreen("/")} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={activeScreen === "all" ? "active" : ""}
                                onClick={() => setActiveScreen("all")} to="/all">All Records</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;