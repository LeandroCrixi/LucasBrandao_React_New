
import styles from './Imprensa.module.css';

const Imprensa = () => {
    return (
        <main className={styles.main}>
            <div className={styles.imprensaTitle}>Imprensa + Destaques</div>
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
                <div className={styles.imprensaRight}>
                    {/* Replace src with your image path later */}
                    <img
                        className={styles.imprensaImgArch}
                        src="/assets/imprensa-destaque.jpg"
                        alt="Lucas Brandão tocando violão"
                    />
                </div>
            </section>
            {/* Quadros Section */}
            <section className={styles.quadrosSection}>
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
            </section>
        </main>
    );
};

export default Imprensa;
