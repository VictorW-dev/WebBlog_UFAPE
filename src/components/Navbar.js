import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <span>WebBlog</span> UFAPE
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;