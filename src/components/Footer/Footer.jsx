import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/olucasbrandaoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.icon}><span aria-hidden><FontAwesomeIcon icon={faInstagram} className={styles.edit} /></span></a>
                    <a href="https://www.facebook.com/lucas.vieirabrandao" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.icon}><span aria-hidden><FontAwesomeIcon icon={faFacebook} className={styles.edit} /></span></a>
                    {/* <a href="#" aria-label="YouTube" className={styles.icon}><span aria-hidden>▶️</span></a> */}
                </div>
                <div className={styles.copyright}>
                    2025, All Rights Reserved<br />
                    <span className={styles.credit}>Website design by <a href="https://leo-crixi.com/">Leo Crixi</a></span>
                </div>
                <div className={styles.contact}>
                    <p>Para agendamentos e informações:</p>
                    <a href="https://wa.me/+55119949746943" target="_blank" className={styles.contactLink}>
                        <span><FontAwesomeIcon icon={faWhatsapp} className={`${styles.edit} ${styles.wp}`} /></span>
                        <span className={styles.contactText}>(11) 94974-6943</span>
                    </a>
                    <a href="https://www.instagram.com/gisellycinacchi/" target="_blank" aria-label="Instagram" className={styles.contactLink}>
                        <span><FontAwesomeIcon icon={faInstagram} className={`${styles.edit} ${styles.wp}`} /></span>
                        <span className={styles.contactText}>@gisellycinacchi</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
