import { useMemo, useState, useEffect, memo } from 'react';
import styles from './Shows.module.css';
import components from '../../styles/components/components.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { fetchData } from '../../data/api';

const ITEMS_PER_PAGE = 20;

// Returns just the date (no time) from a Date or date string
function toDayOnly(dateInput) {
  // If the input is a date-only string like "2025-11-09",
  // `new Date('YYYY-MM-DD')` is parsed as UTC which can shift the
  // local date depending on the user's timezone. To avoid marking
  // today's shows as past we should construct a local date when
  // the string is a plain ISO date (no time).
  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    const [y, m, d] = dateInput.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
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
  // Note: removed debug logs

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

// Memoize ShowRow to avoid unnecessary re-renders when props don't change
const MemoShowRow = memo(ShowRow);


const Shows = () => {
  const [page, setPage] = useState(1);
  const [fetchedShows, setFetchedShows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
        if (!mounted) return;
        // Always use the remote data as the source (can be empty array)
        setFetchedShows(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('fetchData error:', err);
        if (!mounted) return;
        setError(err?.message || String(err));
        // On error still set an empty array so UI can render gracefully
        setFetchedShows([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();

    return () => { mounted = false };
  }, []);

  // Merge and sort shows in one memoized step
  const sortedConcerts = useMemo(() => {
    // ## STEP 1: MERGE VENUE INFO INTO SHOWS ##
    // This is where you include your new logic.
    const source = Array.isArray(fetchedShows) ? fetchedShows : [];

    const mergedShows = source.map(show => {
      // Supabase may return the related venue as `venues` or `venue` (object)
      const venueInfo = show?.venues || show?.venue || null;

      return {
        ...show,
        venue: venueInfo?.name || 'Venue Not Found',
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
  }, [fetchedShows]);

  // Pagination
  if (loading) return <div className={styles.showsContainer}><h1 className={styles.title}>SHOWS</h1><p>Carregando shows...</p></div>;

  const totalPages = Math.ceil(sortedConcerts.length / ITEMS_PER_PAGE);
  const currentSlice = sortedConcerts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.showsContainer}>
      <h1 className={styles.title}>SHOWS</h1>
      {error && <div style={{ color: 'red' }}>Erro ao buscar shows: {error}</div>}
      <div className={styles.showsList}>
        {currentSlice.length > 0 ? (
          // Use show.id for the key for better performance and stability
          currentSlice.map((show, idx) => (
            // Render ShowRow directly. Use show.id when available; fallback to a stable composite key.
            <MemoShowRow key={show.id ?? `${show.dateTime ?? 'no-date'}-${idx}`} {...show} />
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