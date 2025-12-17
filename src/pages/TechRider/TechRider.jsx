import React, { useState, useEffect } from 'react';
import styles from './TechRider.module.css';
import lucasImg from '../../assets/lucas-img.png';
import { fetchData } from '../../data/api';

// Helper: parse date-only strings (YYYY-MM-DD) as local dates to avoid UTC shift
function toDayOnly(dateInput) {
    if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
        const [y, m, d] = dateInput.split('-').map(Number);
        return new Date(y, m - 1, d);
    }
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const TechRider = () => {
    const [nextShow, setNextShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;
        const run = async () => {
            setLoading(true);
            try {
                const data = await fetchData();
                if (!mounted) return;
                const source = Array.isArray(data) ? data : [];

                const merged = source.map(show => {
                    const venueInfo = show?.venues || show?.venue || null;
                    return {
                        ...show,
                        venue: venueInfo?.name || 'Venue Not Found',
                        googleLink: venueInfo?.googleLink || '',
                        appleLink: venueInfo?.appleLink || '',
                        address: venueInfo?.address || ''
                    };
                });

                const today = toDayOnly(new Date());
                const upcoming = merged.filter(s => toDayOnly(s.dateTime) >= today);
                const next = upcoming.length > 0 ? upcoming[0] : null;
                if (mounted) setNextShow(next);
            } catch (err) {
                console.error('fetchData error:', err);
                if (mounted) setError(err?.message || String(err));
            } finally {
                if (mounted) setLoading(false);
            }
        };

        run();

        return () => { mounted = false };
    }, []);

    return (
        <section className={styles.techRider}>
            {/* Header / Artist Info */}
            <header className={styles.header}>
                <img src={lucasImg} alt="Lucas Brandão tocando violão" className={styles.photo} />
                <div className={styles.titleWrapper}>
                    <h1 className={styles.logo}>Luc<span>a</span>s Br<span>a</span>ndão</h1>
                    {/* <p className={styles.roles}>Cantor • Compositor • Instrumentista</p> */}
                </div>
            </header>

            {/* Video Section */}
            <div className={styles.videoWrapper}>
                <button className={styles.playBtn}>
                    <span>▶</span>
                </button>
            </div>

            {/* Next Concert */}
            <div className={styles.agenda}>
                <h2 className={styles.agendaTitle}>AGENDA</h2>
                {loading && <p>Loading next show...</p>}
                {error && <p>Error loading show: {error}</p>}
                {!loading && !error && nextShow && (
                    <div className={styles.agendaInfo}>
                        <div className={styles.dateTime}>
                            <p>{nextShow.day} {nextShow.month}</p>
                            <p>{nextShow.year}</p>
                            <p>{nextShow.weekDay}</p>
                        </div>
                        <p>{nextShow.time}</p>
                        <div className={styles.venue}>
                            <p>{nextShow.venue}</p>
                            <p>{nextShow.address}</p>
                        </div>
                    </div>
                )}
                {!loading && !error && !nextShow && (
                    <p>No upcoming shows.</p>
                )}
                <a href="/shows" className={styles.btn}>Veja Agenda Completa</a>
            </div>

            {/* Contact */}
            <div className={styles.contact}>
                <h2 className={styles.contactTitle}>Entre em Contato</h2>
                <div className={styles.contactInfo}>
                    <a href="https://wa.me/5511949746943" target="_blank" rel="noopener noreferrer">
                        📞 (11) 94974-6943
                    </a>
                    <a href="https://instagram.com/olucasbrandaoo" target="_blank" rel="noopener noreferrer">
                        📷 @olucasbrandaoo
                    </a>
                </div>
            </div>

            {/* Website Button */}
            <a href="https://lucas-brandao.com" target="_blank" rel="noopener noreferrer" className={styles.btn}>
                Veja meu Website
            </a>
        </section>
    );
};

export default TechRider;
