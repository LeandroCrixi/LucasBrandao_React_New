import styles from './Imprensa.module.css';
import component from '../../styles/components/components.module.css'
import img from '../../assets/img-header.webp';

const Imprensa = () => {
    return (
        <main className={styles.main}>
            {/* <div className={styles.imprensaTitle}>Imprensa + Destaques</div>
            <section className={styles.imprensaSection}>
                <div className={styles.imprensaLeft}>
                    <div className={styles.imprensaBox}>
                        <div className={styles.imprensaBoxTitle}>DESTAQUES NA CARREIRA</div>
                        <div className={styles.imprensaBoxText}>
                            Como artista independente, Lucas enfrentou os desafios comuns à cena musical, mas conquistou espaços importantes, como:
                        </div>
                        <ul className={styles.imprensaBoxList}>
                            <li>Participação na Rádio Nova FM 85,7 (2017).</li>
                            <li>Apresentação no programa Agora é com Datena (Band TV, 2018).</li>
                            <li>Parceria com a produtora Leste Filmes, criação de conteúdo audiovisual (Webclips).</li>
                            <li>Apesar das dificuldades financeiras, que o levaram a trabalhos braçais para se sustentar, a música sempre foi seu porto seguro.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.imprensaRight}> */}
            {/* Replace src with your image path later */}
            {/* <img
                        className={styles.imprensaImgArch}
                        src={img}
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section> */}
            {/* Quadros Section */}
            {/* <section className={styles.quadrosSection}>
                <div className={styles.quadroBox}>
                    <div className={styles.quadroTitle}>Músicos colaboradores</div>
                    <ul className={styles.quadroList}>
                        <li>Jory Albuquerque (guitarrista de Breaking Benjamin Cover, Alisson Cruz e Noah Music)</li>
                        <li>Gabriel Ávila (músico da Banda Na Positiva, Noah Music e Regaiamente)</li>
                        <li>Nico Carneiro (ex-integrante de projetos com Rincon Sapiência e Viegas)</li>
                        <li>Alfredo Sabino (experiência com grandes nomes como Reinaldo, Jorge Aragão e Dudu Nobre)</li>
                    </ul>
                </div>
                <div className={styles.quadroBox}>
                    <div className={styles.quadroTitle}>Formatos de apresentação</div>
                    <ul className={styles.quadroList}>
                        <li>Voz e violão (acústico)</li>
                        <li>Bandas reduzidas (trios ou quartetos)</li>
                        <li>Banda completa (com direção musical personalizada)</li>
                    </ul>
                </div>
                <div className={styles.quadroBox}>
                    <div className={styles.quadroTitle}>informações gerais</div>
                    <ul className={styles.quadroList}>
                        <li>Jardim São José, Poá - São Paulo</li>
                        <li>Artista independente</li>
                        <li>Mais de 100 shows realizados no último ano</li>
                    </ul>
                </div>
                <div className={styles.quadroBox}>
                    <div className={styles.quadroTitle}>Equipe Técnica e Produção</div>
                    <div className={styles.quadroText}>
                        Produção artística e assessoria especializada sob o comando de Giselly Cinacchi, com expertise em:
                    </div>
                    <ul className={styles.quadroListIndented}>
                        <li>Marketing musical</li>
                        <li>Produção de shows</li>
                        <li>Estratégias de vendas e visibilidade</li>
                    </ul>
                </div>
            </section> */}
            <div>
                {/* 🎤 Hero Section */}
                <header className={`${styles.hero}`}>
                    <div className={styles.heroContent}>
                        <h1>Imprensa + Destaques</h1>
                        <p>"Transformando desafios em música e impacto cultural."</p>
                    </div>
                </header>

                {/* 📰 Press Highlights */}
                <section className={styles.section}>
                    <h2>Destaques na Imprensa</h2>
                    <div className={styles.pressGrid}>
                        <div className={styles.pressCard}>
                            <h3>📻 Rádio Nova FM 85,7</h3>
                            <p>Entrevista ao vivo sobre carreira independente (2017).</p>
                        </div>
                        <div className={styles.pressCard}>
                            <h3>📺 Programa Agora é com Datena</h3>
                            <p>Apresentação ao vivo na Band TV (2018).</p>
                        </div>
                        <div className={styles.pressCard}>
                            <h3>🎬 Leste Filmes</h3>
                            <p>Parceria na criação de webclipes e conteúdo audiovisual.</p>
                        </div>
                        <a href="https://www.youtube.com/live/36Ac1r4KB1o?si=bAKjS8eCTkkFITId" target='_blank'>
                            <div className={styles.pressCard}>
                                <h3>🎤 PodCast Portal da Região</h3>
                                <p>Quadro Fala + Toca com Lucas Brandão</p>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 🎶 Musician Collaborators */}
                {/* <section className={styles.section}>
                    <h2>Músicos Colaboradores</h2>
                    <div className={styles.collabGrid}>
                        <div className={styles.collabCard}>🎸 Jory Albuquerque<br /><small>Guitarrista</small></div>
                        <div className={styles.collabCard}>🥁 Gabriel Ávila<br /><small>Baterista</small></div>
                        <div className={styles.collabCard}>🎹 Nico Carneiro<br /><small>Tecladista</small></div>
                        <div className={styles.collabCard}>🎷 Alfredo Sabino<br /><small>Multi-instrumentista</small></div>
                    </div>
                </section> */}

                {/* 🎟️ Presentation Formats */}
                <section className={styles.section}>
                    <h2>Formatos de Apresentação</h2>
                    <ul className={styles.formatList}>
                        <li>🎙️ Voz e violão (acústico)</li>
                        <li>🎵 Bandas reduzidas (trios e quartetos)</li>
                        <li>🎤 Banda completa com direção musical personalizada</li>
                    </ul>
                </section>
            </div>

        </main>
    );
};

export default Imprensa;
