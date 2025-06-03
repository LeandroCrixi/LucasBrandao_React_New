import styles from './Footer.module.css';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socials}>
                    <a href="https://www.facebook.com/lucas.vieirabrandao" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.icon}><span aria-hidden><img src={facebookIcon} alt="" /></span></a>
                    <a href="https://www.instagram.com/olucasbrandaoo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.icon}><span aria-hidden><img src={instagramIcon} alt="" /></span></a>
                    {/* <a href="#" aria-label="YouTube" className={styles.icon}><span aria-hidden>▶️</span></a> */}
                </div>
                <div className={styles.copyright}>
                    2025, All Rights Reserved<br />
                    <span className={styles.credit}>Website design by <a href="https://leandro-crixi.netlify.app/">Leo Crixi</a></span>
                </div>
                <div className={styles.contact}>
                    <p>Para agendamentos e informações:</p>
                    <a href="tel:+55119949746943">(11) 94974-6943</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
