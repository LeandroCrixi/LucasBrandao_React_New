import styles from './About.module.css';
import component from '../../styles/components/components.module.css'
import imgGuitar from '../../assets/img-guitar.webp';
import imgMais1 from '../../assets/img-mais1.webp';
import imgLucas from '../../assets/img-lucas.webp';
import guitarImg from '../../assets/guitar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <main className={`${styles.main}`}>
            <section className={`${styles.headerAbout}`}></section>
            <div id={styles.aboutTitle}>
                <h2 className={`${component.aboutTitle}`}>Lucas Brandão: A Trajetória Musical Entre Reggae e Brasilidade</h2>
                <p>Cantor, compositor e violonista paulista que une reggae, samba e MPB em um estilo único e autêntico, com raízes na música brasileira e influências diversas.</p>
            </div>

            {/* About Section 1 */}
            <section className={`${styles.aboutSection}`} id={styles.as1}>
                <div className={styles.aboutContent}>
                    {/* <div className={`${component.aboutTitle}`} id={styles.aboutTitle}>Sobre Lucas</div> */}
                    {/* <div className={styles.aboutSubtitle}>A TRAJETÓRIA MUSICAL ENTRE REGGAE E BRASILIDADE</div> */}
                    <div className={styles.aboutSubtitle}>Origens e Inspiração</div>
                    <div className={styles.aboutText}>
                        Nascido e criado em Poá, São Paulo, Lucas Brandão é um artista multifacetado: cantor, compositor e violonista, com raízes na música brasileira e influências que transitam entre o reggae, o samba e a MPB.<br /><br />
                        Sua trajetória musical começou ainda na infância, no berço cristão, onde teve seu primeiro contato com o violino aos 11 anos. Dois anos depois, em uma viagem de cruzeiro, se encantou pela música ao vivo ao assistir a uma dupla interpretando "Azul," de Djavan – momento que despertou nele a paixão pelo violão, hoje seu "companheiro inseparável."
                    </div>
                    {/* <a className={`${styles.aboutBtn} ${component.btn}`}>CONTATO</a> */}
                </div>
                <div className={`${component.imageWrapper} ${component.miniContainer}`}>
                    <img
                        className={component.image}
                        src={imgGuitar}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section>

            {/* About Section 2 */}
            <section className={`${styles.aboutSection} ${component.miniContainer}`} id={styles.as2}>
                <div className={component.imageWrapper}>
                    <img
                        className={component.image}
                        src={imgMais1}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>

                <div className={styles.aboutContent}>
                    {/* <div className={styles.aboutSubtitle}>DA PRIMEIRA COMPOSIÇÃO AO PRIMEIRO PROJETO</div> */}
                    <div className={styles.aboutSubtitle}>Primeiros Passos na Música</div>
                    <div className={styles.aboutText}>
                        Aos 16 anos, em 2014, Lucas deu seus primeiros passos como
                        compositor ao lado do amigo Jory Albuquerque, formando a
                        Banda NoaH Músic. Juntos, lançaram o álbum No Ar, com um
                        repertório acústico de voz e violão, marcando o início de sua
                        jornada artística. <br /> <br />
                        Suas referências musicais incluem grandes nomes como
                        Djavan, Elis Regina, Emílio Santiago, João Bosco, Natiruts,
                        Mato Seco e Ponto de Equilíbrio – influências que ecoam em
                        suas canções, mesclando poeticidade, swing e brasilidade.
                    </div>
                    {/* <button className={styles.aboutBtn}>CONTATO</button> */}
                </div>
            </section>

            {/* Page Break for About Section */}
            <div className={`${component.miniContainer} ${styles.pageBreak}`}>
                <div className={styles.pageBreakImg}>
                    <img src={guitarImg} alt="" />
                </div>

                <div className={styles.pageBreakContent}>
                    <h2>Influências Musicais</h2>
                    <div className={`${styles.cardsGrid}`}>
                        <div className={styles.card}>
                            <div>
                                <FontAwesomeIcon icon={faMusic} className={styles.edit} />
                            </div>
                            <div>
                                <h4>MPB</h4>
                                <p>Djavan, Elis Regina, Emílio Santiago e João Bosco são algumas das referências que ecoam em suas composições, trazendo poeticidade e sofisticação.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <FontAwesomeIcon icon={faGuitar} className={styles.edit} />
                            </div>
                            <div>
                                <h4>Reggae</h4>
                                <p>Bandas como Natiruts, Mato Seco e Ponto de Equilíbrio influenciam seu estilo, mesclando o swing brasileiro com a levada característica do reggae.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div>
                                <FontAwesomeIcon icon={faMicrophone} className={styles.edit} />
                            </div>
                            <div>
                                <h4>Brasilidade</h4>
                                <p>A essência da música brasileira permeia suas canções, criando um estilo único que mistura diversos ritmos nacionais.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section 3 */}
            <section className={`${styles.aboutSection} ${component.miniContainer}`} id={styles.as3}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutSubtitle}>O RENASCER MUSICAL PÓS-PANDEMIA</div>
                    <div className={styles.aboutText}>
                        No final de 2023, após um período de reflexão durante a
                        pandemia, Lucas decidiu se dedicar exclusivamente à música,
                        adotando uma carreira solo.
                        Hoje, ele aquece as noites de São Paulo com um repertório que
                        une reggae, MPB e soul brasileiro, levando sua voz e violão
                        para casas como:
                        {/* <ul>
                            <li>Laricas Point (Guarujá)</li>
                            <li>Beco do Batman (Vila Madalena)</li>
                            <li>Quintal do Espeto (Santo André e Moema)</li>
                            <li>Fábricas de Cultura de São Paulo</li>
                        </ul> */}

                        <div className={styles.concertList}>
                            <div>
                                <h4>Sao Paulo Capital</h4>
                                <ul>
                                    <li>Beco do Batman (Vila Madalena)</li>
                                    <li>Fábricas de Cultura</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Grande São Paulo</h4>
                                <ul>
                                    <li>Quintal do Espeto (Santo André)</li>
                                    <li>Quintal do Espeto (Moema)</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Litoral</h4>
                                <ul>
                                    <li>Laricas Point (Guarujá)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <button className={styles.aboutBtn}>CONTATO</button> */}
                </div>

                <div className={component.imageWrapper}>
                    <img
                        className={component.image}
                        src={imgLucas}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section>

            {/* Page Break Estilo e Mensagem */}
            <div className={`${component.miniContainer} ${styles.pgEM}`}>
                {/* <div className={styles.aboutSubtitle}>O SOM: AMOR, AUTOCONHECIMENTO E GROOVE</div> */}
                <div className={styles.innerPGEM}>
                    <div className={styles.aboutSubtitle}>Estilo e Mensagem</div>
                    <div className={styles.aboutText}>
                        Com letras que abordam amor, autoconhecimento e identidade cultural, Lucas busca transmitir emoção e conexão através de sua música. Seu estilo único mistura a levada do reggae com a sofisticação da MPB, criando uma sonoridade autêntica que ressoa com diversos públicos.
                    </div>
                </div>
            </div>

            {/* Proximos Passos */}
            <div className={`${component.miniContainer} ${styles.nextSteps}`}>
                <div className={styles.nextStepsContent}>
                    <div className={styles.aboutSubtitle}>PRÓXIMOS PASSOS</div>
                    <div className={styles.aboutText}>
                        Com seus 20 e poucos anos, Lucas Brandão prepara novos
                        trabalhos autorais e mira expandir sua presença em festivais e
                        eventos culturais. Sua missão é levar a essência da música
                        brasileira a novos públicos, sempre com autenticidade e
                        paixão.
                    </div>
                </div>
                <div>
                    <img src={guitarImg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default About;
