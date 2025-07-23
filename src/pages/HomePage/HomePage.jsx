import styles from './HomePage.module.css';
import component from '../../styles/components/components.module.css'
import imgHeader from '../../assets/img-header.webp';
import imgGuitar from '../../assets/img-guitar.webp';
import imgMais1 from '../../assets/img-mais1.webp';
import imgMais2 from '../../assets/img-mais2.webp';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import CountUpOnView from '../../components/Utils/CountUpOnView';

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
                    {/* <a className={`${styles.cta} ${component.btn}`}>OUÇA AGORA</a> */}
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        <img src={imgHeader} alt="Lucas playing guitar in a forest setting" className={styles.imageFill} />
                    </div>
                </div>
            </section>

            {/* Page Break for Quote Section */}
            <div className={`${component.pageBreak} ${styles.pageBreak} ${component.pbContainer}`}>
                <h2>Inspirações Musicais</h2>
                <blockquote>"Hoje eu vi que ser bom é natureza minha." - Lucas Brandão</blockquote>
                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div>
                            <FontAwesomeIcon icon={faMusic} className={styles.edit} />
                        </div>
                        <div>
                            <h4>MPB</h4>
                            <p>Influências de grandes nomes como Caetano Veloso e Alceu Valença moldam seu estilo único.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <FontAwesomeIcon icon={faGuitar} className={styles.edit} />
                        </div>
                        <div>
                            <h4>Reggae</h4>
                            <p>Ritmos jamaicanos que trazem leveza e mensagens de paz para suas composições.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div>
                            <FontAwesomeIcon icon={faMicrophone} className={styles.edit} />
                        </div>
                        <div>
                            <h4>Soul</h4>
                            <p>A profundidade e emoção do soul music complementam sua expressão artística.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sobre Lucas Section */}
            <section className={`${styles.sobreSection}`}>
                <div className={`${component.imageWrapper} ${styles.sobreImageWrapper} ${component.miniContainer}`}>
                    <img
                        className={`${component.image} ${styles.sobreImage}`}
                        src={imgGuitar}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
                <div className={`${styles.sobreContent}`}>
                    <h2 className={`${component.aboutTitle}`} id={styles.sobreTitle}>Sobre Lucas</h2>

                    <div>
                        <div className={`${component.miniContainer} ${styles.sobreText}`}>
                            Cantor, compositor e instrumentista, Lucas Brandão une reggae, MPB e soul em um repertório que celebra o amor, a ancestralidade e a leveza da vida. Com influências da musicalidade brasileira, seu som é um convite à dança e à reflexão.
                        </div>

                        <div className={styles.artistStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>100+</span>
                                <span className={styles.statLabel}>shows no último ano</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statIcon}>📍</span>
                                <span className={styles.statLabel}>Jardim São José, Poá - SP</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statIcon}>🎵</span>
                                <span className={styles.statLabel}>Artista independente</span>
                            </div>
                        </div>

                    </div>
                    <NavLink to='/about' className={`${component.btn} ${styles.sobreBtn}`}>LEIA MAIS</NavLink>
                </div>
            </section>

            {/* Page Break for Quote Section */}
            <div className={`${component.pageBreak} ${styles.pageBreak} ${component.pbContainer}`}>
                <h2>Mais que Som, é Alma</h2>
                <blockquote>"Pronto para achar a alegria, um sorriso sincero e uma consciência limpa." - Moisés albuquerque</blockquote>
                <p>Uma mistura de reggae, MPB e verdade que move o corpo e o espírito. Lucas Brandão cria uma experiência musical que transcende o simples entretenimento, conectando-se com o público em um nível mais profundo.</p>
            </div>

            {/* Números que Contam História Section */}
            <section className={`${styles.numerosContam} ${component.container}`}>
                <div>
                    <h2>Números que Contam História</h2>
                    <div className={`${styles.statsContainer}`}>
                        <div className={styles.statItem}>
                            {/* <span className={styles.statNumber}>100 +</span> */}
                            <span><CountUpOnView target={100} className={styles.statNumber} /> + </span>

                            <span className={styles.statLabel}>Shows</span>
                            <span className={styles.statDescription}>Apresentações realizadas apenas no último ano</span>
                        </div>
                        <div className={styles.statItem}>
                            <span><CountUpOnView target={10} className={styles.statNumber} /> + </span>
                            <span className={styles.statLabel}>Anos</span>
                            <span className={styles.statDescription}>De evolução e conexão espiritual através da música</span>
                        </div>
                        <div className={`${styles.statItem} ${styles.statItemFull}`}>
                            <span><CountUpOnView target={1000} className={styles.statNumber} /> + </span>
                            <span className={styles.statLabel}>Fãs</span>
                            <span className={styles.statDescription}>Pessoas tocadas pela sua música em todo o Brasil</span>
                        </div>
                    </div>
                    <p>De pequenos locais a grandes momentos, Lucas leva sentimento a cada palco. Os números revelam, acima de tudo, uma existência onde a música conecta coração, alma e visão.</p>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.maisQueSomImg}
                        src={imgMais2}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section>
        </main>
    );
}

export default HomePage;
