import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
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
                    <button className={styles.cta}>OUÇA AGORA</button>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for artist image */}
                    <div className={styles.imagePlaceholder}>
                        {/* Add your image here later */}
                    </div>
                </div>
            </section>

            {/* Sobre Lucas Section */}
            <section className={styles.sobreSection}>
                <div className={styles.sobreImageWrapper}>
                    {/* Replace src with your image path later */}
                    <img
                        className={styles.sobreImage}
                        src="/assets/sobre-lucas-placeholder.jpg"
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
                <div className={styles.sobreContent}>
                    <div className={styles.sobreTitle}>Sobre Lucas</div>
                    <div className={styles.sobreText}>
                        Cantor, compositor e instrumentista, Lucas Brandão une reggae, MPB e soul em um repertório que celebra o amor, a ancestralidade e a leveza da vida. Com influências da musicalidade brasileira, seu som é um convite à dança e à reflexão.
                    </div>
                    <ul className={styles.sobreList}>
                        <li>Localização: Jardim São José, Poá - São Paulo</li>
                        <li>Artista independente</li>
                        <li>Mais de 100 shows realizados no último ano</li>
                    </ul>
                    <button className={styles.sobreBtn}>LEIA MAIS</button>
                </div>
            </section>
            {/* Mais que Som, é Alma Section */}
            <section className={styles.maisQueSomSection}>
                <div className={styles.maisQueSomTop}>
                    <div className={styles.maisQueSomImages}>
                        {/* Replace src with your image paths later */}
                        <img
                            className={styles.maisQueSomImg}
                            src="/assets/mais-que-som-1.jpg"
                            alt="Lucas Brandão cantando ao microfone"
                        />
                        <img
                            className={styles.maisQueSomImg}
                            src="/assets/mais-que-som-2.jpg"
                            alt="Lucas Brandão tocando violão"
                        />
                    </div>
                    <div className={styles.maisQueSomRight}>
                        <div className={styles.maisQueSomTitle}>MAIS QUE SOM, É ALMA</div>
                        <div className={styles.maisQueSomSubtitle}>
                            Uma mistura de reggae, MPB e verdade que move o corpo e o espírito.
                        </div>
                        <div className={styles.maisQueSomStats}>
                            <div>
                                <span className={styles.maisQueSomStat}>100+</span>
                                <span className={styles.maisQueSomStatLabel}>Shows realizados no último ano</span>
                            </div>
                            <div>
                                <span className={styles.maisQueSomStat}>10 anos</span>
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
