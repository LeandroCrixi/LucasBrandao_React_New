import { useMemo, useState } from 'react';
import styles from './Shows.module.css';
import components from '../../styles/components/components.module.css'
import venuesData from '../../data/venues.json';
import showsData from '../../data/shows.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 20;

// Returns just the date (no time) from a Date or date string
function toDayOnly(dateInput) {
  const date = new Date(dateInput);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Returns today's date (no time)
function getToday() {
  return toDayOnly(new Date());
}

const ShowRow = ({ id, dateTime, day, month, year, weekDay, time, venue, appleLink, googleLink, address }) => {
  // Compare only the date part (ignore time)
  const concertDay = toDayOnly(dateTime);
  const today = getToday();
  const isPast = concertDay < today;

  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  const link = isIOS ? appleLink : googleLink;

  return (
    <div key={id} className={`${styles.shows} ${isPast ? styles.pastShow : ''}`}>
      <time dateTime={dateTime}>{`${day} ${month}`}</time>
      <p><sup>{year}</sup><sub>{weekDay}</sub></p>
      <time dateTime={time}>{time}</time>
      <a href={link} target='_blank' className={styles.venue}>
        <sup>{venue}</sup>
        <sub>{address}</sub>
        <span style={{ fontSize: '0.8em', color: '#666' }}>
          <FontAwesomeIcon icon={faMapPin} />&nbsp;&nbsp;&nbsp;&nbsp;(Veja no Mapa)
        </span>
      </a>
    </div>
  );
};

const Shows = () => {
  const [page, setPage] = useState(1);

  // Merge and sort shows in one memoized step
  const sortedConcerts = useMemo(() => {
    // ## STEP 1: MERGE VENUE INFO INTO SHOWS ##
    // This is where you include your new logic.
    const mergedShows = showsData.map(show => {
      const venueInfo = venuesData.find(v => v.id === show.venueId);

      return {
        ...show,
        venue: venueInfo?.name || 'Venue Not Found',
        // link: venueInfo?.link || 'Venue Not Found',
        googleLink: venueInfo?.googleLink || '',
        appleLink: venueInfo?.appleLink || '',
        address: venueInfo?.address || ''
      };
    });

    // ## STEP 2: USE THE NEW `mergedShows` ARRAY FOR SORTING ##
    const today = getToday();
    const upcoming = [];
    const past = [];

    // Use mergedShows instead of showsData here
    mergedShows.forEach((concert) => {
      const concertDay = toDayOnly(concert.dateTime);
      if (concertDay >= today) {
        upcoming.push(concert);
      } else {
        past.push(concert);
      }
    });

    const sortedUpcoming = upcoming.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    const sortedPast = past.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

    return [...sortedUpcoming, ...sortedPast];
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
          // Use show.id for the key for better performance and stability
          currentSlice.map((show) => (
            <ShowRow key={show.id} {...show} />
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