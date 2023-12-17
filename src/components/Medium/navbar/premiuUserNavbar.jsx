import React, { useState } from "react";
import './navbar.css'
import { ReactComponent as Logo } from '../../../photo/premiuLogo.svg'
import { Link } from "react-router-dom";

const PremiumUserNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    };

    return (
        <nav className="premium-navbar">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <button className="menu-button" onClick={handleMenuToggle}>
                Menu
            </button>
            <ul className={`menu-list ${menuOpen ? "show" : ""}`}>
                <li>
                    <Link to="/user-page/trainings" className="nav-link">
                        Trainings
                    </Link>
                </li>
                <li>
                    <Link to="/user-page/diets" className="nav-link">
                        Diets
                    </Link>
                </li>
                <li>
                    <Link to="/premium-user-page/premium-user-data" className="nav-link">
                        Account
                    </Link>
                </li>
                <li>
                    <Link to="/user-page/records" className="nav-link">
                        Records
                    </Link>
                </li>

                <li>
                    <Link to="/premium-user-page/premium-indicators" className="nav-link">
                        Body Indicators
                    </Link>
                </li>

                <li>
                    <Link to="/user-page/calendar" className="nav-link">
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" to={"/"} onClick={handleLogout}>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default PremiumUserNavbar;