
import styles from './Header.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen((open) => !open);
    const handleClose = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link to="/" className={styles.logo} onClick={handleClose}>
                    Lucas Brandão
                </Link>
                <button
                    className={styles.burger}
                    aria-label="Abrir menu"
                    aria-expanded={menuOpen}
                    onClick={handleToggle}
                >
                    <span className={styles.burgerBar}></span>
                    <span className={styles.burgerBar}></span>
                    <span className={styles.burgerBar}></span>
                </button>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                        <li><NavLink to="/about" onClick={handleClose}>BIOGRAFIA DO ARTISTA</NavLink></li>
                        <li><NavLink to="/fotos" onClick={handleClose}>FOTOS</NavLink></li>
                        {/* <li><NavLink to="/musica" onClick={handleClose}>MÚSICA + VÍDEO</NavLink></li> */}
                        <li><NavLink to="/imprensa" onClick={handleClose}>IMPRENSA + DESTAQUES</NavLink></li>
                        {/* <li><NavLink to="/shows" onClick={handleClose}>SHOWS AO VIVO</NavLink></li> */}
                        {/* <li><NavLink to="/techrider" onClick={handleClose}>TECH RIDER</NavLink></li> */}
                        {/* <li><NavLink to="/contato" onClick={handleClose}>CONTATO</NavLink></li> */}
                    </ul>
                </nav>
            </div>
            {menuOpen && <div className={styles.overlay} onClick={handleClose} />}
        </header>
    );
};

export default Header;