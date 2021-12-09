import React from "react";
import "./Navbar.css";
import logo from "../../images/React.jpeg"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    {/* <img src={logo} alt="" /> */}

                    <h1>Logo</h1>
                </Link>
            </div>
            <div className="nav-items-container">
                <div className="nav-items">
                    <Link to="/category">
                        <h2>Categories</h2>
                    </Link>
                </div>

                <div className="nav-items">
                    <Link to="auth">
                        <h2>Auth</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
