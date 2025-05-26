
import styles from './Fotos.module.css';

const Fotos = () => {
    return (
        <main className={styles.main}>
            <section className={styles.fotosSection}>
                <div className={styles.fotosGrid}>
                    {/* Replace src with your image paths later */}
                    <img className={styles.fotoImg} src="/assets/foto1.jpg" alt="Lucas Brandão tocando violão" />
                    <img className={styles.fotoImg} src="/assets/foto2.jpg" alt="Lucas Brandão cantando" />
                    <img className={styles.fotoImg} src="/assets/foto3.jpg" alt="Lucas Brandão com violão" />
                    <img className={styles.fotoImg} src="/assets/foto4.jpg" alt="Lucas Brandão no palco" />
                    <img className={styles.fotoImg} src="/assets/foto5.jpg" alt="Lucas Brandão guitarra" />
                    <img className={styles.fotoImg} src="/assets/foto6.jpg" alt="Lucas Brandão aplaudindo" />
                    <img className={styles.fotoImg} src="/assets/foto7.jpg" alt="Lucas Brandão retrato" />
                    <img className={styles.fotoImg} src="/assets/foto8.jpg" alt="Lucas Brandão performance" />
                </div>
                <div className={styles.fotosContent}>
                    <div className={styles.fotosTitle}>Portfólio de Fotos</div>
                    <div className={styles.fotosText}>
                        <em>
                            Cada foto conta uma parte da história — momentos no palco, no estúdio ou no fundo do groove.<br /><br />
                            Essas imagens capturam mais do que performances; elas contêm presença, paixão e propósito.<br /><br />
                            De sets acústicos íntimos à energia de uma banda completa, cada foto reflete a essência da música de Lucas.<br /><br />
                            Sinta o ritmo na quietude. É aqui que o som encontra a alma.
                        </em>
                    </div>
                    <button className={styles.fotosBtn}>CONTATO</button>
                </div>
            </section>
        </main>
    );
};

export default Fotos;
