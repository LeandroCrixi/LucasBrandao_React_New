import styles from './HomePage.module.css';
import component from '../../styles/components/components.module.css'
import imgHeader from '../../assets/img-header.webp';
import imgGuitar from '../../assets/img-guitar.webp';
import imgMais1 from '../../assets/img-mais1.webp';
import imgMais2 from '../../assets/img-mais2.webp';

const HomePage = () => {
    return (
        <main className={styles.main}>
            <section className={`${styles.hero}`}>
                <div className={styles.info}>
                    <h1>
                        <span>Lucas</span>
                        <br />
                        <span>Brandão</span>
                    </h1>
                    <hr />
                    <p className={styles.roles}>
                        CANTOR | COMPOSITOR | INSTRUMENTISTA
                    </p>
                    <a className={`${styles.cta} ${component.btn}`}>OUÇA AGORA</a>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        <img src={imgHeader} alt="" />
                    </div>
                </div>
            </section>

            {/* Sobre Lucas Section */}
            <section className={`${styles.sobreSection} ${component.container}`}>
                <div className={styles.sobreImageWrapper}>
                    <img
                        className={styles.sobreImage}
                        src={imgGuitar}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
                <div className={styles.sobreContent}>
                    <h2 className={styles.sobreTitle}>Sobre Lucas</h2>
                    <div className={styles.sobreText}>
                        Cantor, compositor e instrumentista, Lucas Brandão une reggae, MPB e soul em um repertório que celebra o amor, a ancestralidade e a leveza da vida. Com influências da musicalidade brasileira, seu som é um convite à dança e à reflexão.
                    </div>
                    <ul className={styles.sobreList}>
                        <li>Localização: Jardim São José, Poá - São Paulo</li>
                        <li>Artista independente</li>
                        <li>Mais de 100 shows realizados no último ano</li>
                    </ul>
                    <a href='/about' className={`${component.btn} ${styles.sobreBtn}`}>LEIA MAIS</a>
                </div>
            </section>

            {/* Mais que Som, é Alma Section */}
            <section className={`${styles.maisQueSomSection} ${component.container}`}>
                <div className={styles.maisQueSom}>
                    {/* Mais que som Left */}
                    <div className={styles.maisQueSomLeft}>
                        <div className={styles.maisQueSomTitle}>MAIS QUE SOM, É ALMA</div>
                        <div className={styles.maisQueSomSubtitle}>
                            Uma mistura de reggae, MPB e verdade que move o corpo e o espírito.
                        </div>

                        <img
                            className={styles.maisQueSomImg}
                            src={imgMais1}
                            alt="Lucas Brandão cantando ao microfone"
                        />
                    </div>
                    {/* Mais que Som Right */}
                    <div className={styles.maisQueSomRight}>
                        <img
                            className={styles.maisQueSomImg}
                            src={imgMais2}
                            alt="Lucas Brandão tocando violão"
                        />

                        <div className={styles.maisQueSomStats}>
                            <div>
                                <span className={styles.maisQueSomStat}>100+</span>
                                <br />
                                <span className={styles.maisQueSomStatLabel}>Shows realizados no último ano</span>
                            </div>
                            <div>
                                <span className={styles.maisQueSomStat}>10 anos</span>
                                <br />
                                <span className={styles.maisQueSomStatLabel}>de evolução e conexão espiritual.</span>
                            </div>
                        </div>
                        <div className={styles.maisQueSomDesc}>
                            De pequenos locais a grandes momentos, Lucas leva sentimento a cada palco. Os números revelam, acima de tudo, uma existência onde a mesma música com coração, alma e visão.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
