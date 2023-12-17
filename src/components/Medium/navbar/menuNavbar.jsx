import './navbar.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../photo/logo.svg'

import { useState } from 'react';
const UserMenuNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="navbar">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <button className="menu-button" onClick={handleMenuToggle}>
                Menu
            </button>
            <ul className={`menu-list ${menuOpen ? "show" : ""}`}>
                <li>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/create-acc" className="nav-link">
                        Create account
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default UserMenuNavbar