import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socials}>
                    <a href="#" aria-label="WhatsApp" className={styles.icon}><span aria-hidden>🟢</span></a>
                    <a href="#" aria-label="Instagram" className={styles.icon}><span aria-hidden>📸</span></a>
                    <a href="#" aria-label="YouTube" className={styles.icon}><span aria-hidden>▶️</span></a>
                </div>
                <div className={styles.copyright}>
                    2025, All Rights Reserved<br />
                    <span className={styles.credit}>Website design by Leandro Brandão de Cizal</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
