import React, { useState } from "react";
import './navbar.css'
import { ReactComponent as Logo } from '../../../photo/logo.svg'
import { Link } from "react-router-dom";


const FunctionalityPremiumNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
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
                    <Link to="/premium-user-page" className="nav-link">
                        Menu
                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default FunctionalityPremiumNavbar;