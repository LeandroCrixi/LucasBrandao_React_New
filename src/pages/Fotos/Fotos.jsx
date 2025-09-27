import styles from './Fotos.module.css';
import component from '../../styles/components/components.module.css';
import img1 from '../../assets/fotos/img1.jpg';
import img2 from '../../assets/fotos/img2.jpg';
import img3 from '../../assets/fotos/img3.jpg';
import img4 from '../../assets/fotos/img4.jpg';
import img5 from '../../assets/fotos/img5.jpg';
import img6 from '../../assets/fotos/img6.jpg';
import img7 from '../../assets/fotos/img7.jpg';
import img8 from '../../assets/fotos/img8.jpg';
import { NavLink } from 'react-router-dom';

const Fotos = () => {
    return (
        <main className={styles.main}>
            <section className={styles.fotosSection}>
                <div className={styles.fotosContent}>
                    <div className={styles.fotosTitle}>Portfólio de Fotos</div>
                    <div className={styles.fotosText}>
                        <em>
                            Cada foto conta uma parte da história — momentos no palco, no estúdio ou no fundo do groove.
                            Essas imagens capturam mais do que performances; elas contêm presença, paixão e propósito.
                            De sets acústicos íntimos à energia de uma banda completa, cada foto reflete a essência da música de Lucas.
                            Sinta o ritmo na quietude. É aqui que o som encontra a alma.
                        </em>
                    </div>
                    {/* <button className={styles.fotosBtn}>CONTATO</button> */}
                </div>
                <div className={styles.fotosGrid}>
                    <a href={img1} download>
                        <img className={styles.fotoImg} src={img1} alt="Lucas Brandão tocando violão" />
                    </a>
                    <a href={img2} download>
                        <img className={styles.fotoImg} src={img2} alt="Lucas Brandão cantando" />
                    </a>
                    <a href={img3} download>
                        <img className={styles.fotoImg} src={img3} alt="Lucas Brandão com violão" />
                    </a>
                    <a href={img4} download>
                        <img className={styles.fotoImg} src={img4} alt="Lucas Brandão no palco" />
                    </a>
                    <a href={img5} download>
                        <img className={styles.fotoImg} src={img5} alt="Lucas Brandão guitarra" />
                    </a>
                    <a href={img6} download>
                        <img className={styles.fotoImg} src={img6} alt="Lucas Brandão aplaudindo" />
                    </a>
                    <a href={img7} download>
                        <img className={styles.fotoImg} src={img7} alt="Lucas Brandão retrato" />
                    </a>
                    <a href={img8} download>
                        <img className={styles.fotoImg} src={img8} alt="Lucas Brandão performance" />
                    </a>
                </div>

                <NavLink to="https://drive.google.com/drive/folders/1uPYFrHxsZxKBjRoRLh03tRJ0AIDKEJpe" target='_blank' className={component.btn}>VEJA MAIS FOTOS</NavLink>
            </section>
        </main>
    );
};

export default Fotos;
