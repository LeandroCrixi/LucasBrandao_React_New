import { useMemo, useState } from 'react';
import styles from './Shows.module.css';
import components from '../../styles/components/components.module.css'
import showsData from '../../data/shows.json';

const ITEMS_PER_PAGE = 20;

const ShowRow = ({ id, dateTime, day, month, year, weekDay, time, venue }) => {
    const isPast = new Date(dateTime) < new Date()
  return (
    <div key={id} className={`${styles.shows} ${isPast ? styles.pastShow: ''}`}>
      <time dateTime={dateTime}>{`${day} ${month}`}</time>
      <p><sup>{year}</sup><sub>{weekDay}</sub></p>
      <time dateTime={time}>{time}</time>
      <p>{venue}</p>
      <address></address>
    </div>
  );
};

const Shows = () => {
  const today = new Date();
  const [page, setPage] = useState(1);

  // Merge upcoming + past into one sorted array
  const sortedConcerts = useMemo(() => {
    const upcoming = [];
    const past = [];

    showsData.forEach((concert) => {
      const concertDate = new Date(concert.dateTime);
      if (concertDate >= today) {
        upcoming.push(concert);
      } else {
        past.push(concert);
      }
    });

    const sortedUpcoming = upcoming.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    const sortedPast = past.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

    return [...sortedUpcoming, ...sortedPast]; // merged
  }, []);

  // Pagination
  const totalPages = Math.ceil(sortedConcerts.length / ITEMS_PER_PAGE);
  const currentSlice = sortedConcerts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.showsContainer}>
      <h1 className={styles.title}>SHOWS</h1>

      <div className={styles.showsList}>
        {currentSlice.length > 0 ? (
          currentSlice.map((show, index) => (
            <ShowRow key={`row-${index}`} {...show} />
          ))
        ) : (
          <p>Nenhum show encontrado.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1} 
          className={`${components.btn} ${styles.showBtn}`}>
            Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages} className={`${components.btn} ${styles.showBtn}`}>
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default Shows;
