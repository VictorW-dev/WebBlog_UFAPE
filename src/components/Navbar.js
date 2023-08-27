import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                <span>WebBlog</span> UFAPE
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                        Página inicial
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;