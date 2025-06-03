import styles from './About.module.css';
import component from '../../styles/components/components.module.css'
import imgGuitar from '../../assets/img-guitar.webp';
import imgMais1 from '../../assets/img-mais1.webp';
import imgLucas from '../../assets/img-lucas.webp';

const About = () => {
    return (
        <main className={`${styles.main}`}>
            <section className={`${styles.aboutSection}`}>
                <div className={`${component.imageWrapper} ${component.miniContainer}`}>
                    <img
                        className={component.image}
                        src={imgGuitar}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
                <div className={styles.aboutContent}>
                    <div className={`${component.aboutTitle}`} id={styles.aboutTitle}>Sobre Lucas</div>
                        <div className={styles.aboutSubtitle}>A TRAJETÓRIA MUSICAL ENTRE REGGAE E BRASILIDADE</div>
                        <div className={styles.aboutText}>
                            Nascido e criado em Poá, São Paulo, Lucas Brandão é um artista multifacetado: cantor, compositor e violonista, com raízes na música brasileira e influências que transitam entre o reggae, o samba e a MPB.<br /><br />
                            Sua trajetória musical começou ainda na infância, no berço cristão, onde teve seu primeiro contato com o violino aos 11 anos. Dois anos depois, em uma viagem de cruzeiro, se encantou pela música ao vivo ao assistir a uma dupla interpretando "Azul," de Djavan – momento que despertou nele a paixão pelo violão, hoje seu "companheiro inseparável."
                        </div>
                    <a className={`${styles.aboutBtn} ${component.btn}`}>CONTATO</a>
                </div>
            </section>

            <section className={`${styles.aboutSection} ${component.miniContainer}`}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutSubtitle}>A TRAJETÓRIA MUSICAL ENTRE REGGAE E BRASILIDADE</div>
                    <div className={styles.aboutText}>
                        Nascido e criado em Poá, São Paulo, Lucas Brandão é um
                        artista multifacetado: cantor, compositor e violonista, com
                        raízes na música brasileira e influências que transitam entre o reggae, o samba e a MPB.
                        Sua trajetória musical começou ainda na infância, no berço
                        cristão, onde teve seu primeiro contato com o violino aos 11
                        anos. Dois anos depois, em uma viagem de cruzeiro, se
                        encantou pela música ao vivo ao assistir a uma dupla
                        interpretando "Azul,
                        " de Djavan – momento que despertou nele
                        a paixão pelo violão, hoje seu "companheiro inseparável.”
                    </div>
                    <div className={styles.aboutSubtitle}>DA PRIMEIRA COMPOSIÇÃO AO PRIMEIRO PROJETO</div>
                    <div className={styles.aboutText}>
                        Aos 16 anos, em 2014, Lucas deu seus primeiros passos como
                        compositor ao lado do amigo Jory Albuquerque, formando a
                        Banda NoaH Músic. Juntos, lançaram o álbum No Ar, com um
                        repertório acústico de voz e violão, marcando o início de sua
                        jornada artística.
                        Suas referências musicais incluem grandes nomes como
                        Djavan, Elis Regina, Emílio Santiago, João Bosco, Natiruts,
                        Mato Seco e Ponto de Equilíbrio – influências que ecoam em
                        suas canções, mesclando poeticidade, swing e brasilidade.
                    </div>
                    {/* <button className={styles.aboutBtn}>CONTATO</button> */}
                </div>

                <div className={component.imageWrapper}>
                    <img
                        className={component.image}
                        src={imgMais1}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section>

            <section className={`${styles.aboutSection} ${component.miniContainer}`}>
                <div className={component.imageWrapper}>
                    <img
                        className={component.image}
                        src={imgLucas}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutSubtitle}>O RENASCER MUSICAL PÓS-PANDEMIA</div>
                    <div className={styles.aboutText}>
                        No final de 2023, após um período de reflexão durante a
                        pandemia, Lucas decidiu se dedicar exclusivamente à música,
                        adotando uma carreira solo.
                        Hoje, ele aquece as noites de São Paulo com um repertório que
                        une reggae, MPB e soul brasileiro, levando sua voz e violão
                        para casas como:
                        <ul>
                            <li>Laricas Point (Guarujá)</li>
                            <li>Beco do Batman (Vila Madalena)</li>
                            <li>Quintal do Espeto (Santo André e Moema)</li>
                            <li>Fábricas de Cultura de São Paulo</li>
                        </ul>
                    </div>
                    <div className={styles.aboutSubtitle}>O SOM: AMOR, AUTOCONHECIMENTO E GROOVE</div>
                    <div className={styles.aboutText}>
                        Com letras que falam de amor, autoconhecimento e identidade
                        cultural, Lucas busca transmitir emoção e conexão através de
                        sua música. Seu estilo único, que mistura a levada do reggae
                        com a sofisticação da MPB, promete conquistar ainda mais
                        ouvintes nos próximos anos.

                    </div>
                    <div className={styles.aboutSubtitle}>PRÓXIMOS PASSOS</div>
                    <div className={styles.aboutText}>
                        Com seus 20 e poucos anos, Lucas Brandão prepara novos
                        trabalhos autorais e mira expandir sua presença em festivais e
                        eventos culturais. Sua missão é levar a essência da música
                        brasileira a novos públicos, sempre com autenticidade e
                        paixão.
                    </div>
                    {/* <button className={styles.aboutBtn}>CONTATO</button> */}
                </div>
            </section>
        </main>
    );
};

export default About;
