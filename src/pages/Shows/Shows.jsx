import { useMemo, useState, useEffect, memo } from "react";
import styles from "./Shows.module.css";
import components from "../../styles/components/components.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { fetchShows } from "../../data/api";

const ITEMS_PER_PAGE = 20;

function toDayOnly(dateInput) {
  const date = new Date(dateInput);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Returns today's date (no time)
function getToday() {
  return toDayOnly(new Date());
}

const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.userAgent.includes("Mac") && "ontouchend" in document);
const today = getToday();

const ShowRow = ({
  dateTime,
  day,
  month,
  year,
  weekDay,
  time,
  venue,
  appleLink,
  googleLink,
  address,
}) => {
  const concertDay = toDayOnly(dateTime);
  const isPast = concertDay < today;
  const link = isIOS ? appleLink : googleLink;

  return (
    <div className={`${styles.shows} ${isPast ? styles.pastShow : ""}`}>
      <time dateTime={dateTime}>{`${day} ${month}`}</time>
      <p>
        <sup>{year}</sup>
        <sub>{weekDay}</sub>
      </p>
      <time dateTime={time}>{time}</time>
      <a href={link} target="_blank" className={styles.venue}>
        <sup>{venue}</sup>
        <sub>{address}</sub>
        <span style={{ fontSize: "0.8em", color: "#666" }}>
          <FontAwesomeIcon icon={faMapPin} />
          &nbsp;&nbsp;&nbsp;&nbsp;(Veja no Mapa)
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
    const run = async () => {
      try {
        const data = await fetchShows();
        setFetchedShows(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err?.message || String(err));
        setFetchedShows([]);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  // Merge and sort shows in one memoized step
  const sortedConcerts = useMemo(() => {
    const source = Array.isArray(fetchedShows) ? fetchedShows : [];

    const mergedShows = source.map((show) => {
      const venueInfo = show?.venues || show?.venue || null;

      return {
        ...show,
        venue: venueInfo?.name || "Venue Not Found",
        googleLink: venueInfo?.googleLink || "",
        appleLink: venueInfo?.appleLink || "",
        address: venueInfo?.address || "",
      };
    });

    const today = getToday();
    const upcoming = [];
    const past = [];

    mergedShows.forEach((concert) => {
      const concertDay = toDayOnly(concert.dateTime);
      if (concertDay >= today) {
        upcoming.push(concert);
      } else {
        past.push(concert);
      }
    });

    const sortedUpcoming = upcoming.sort(
      (a, b) => new Date(a.dateTime) - new Date(b.dateTime),
    );
    const sortedPast = past.sort(
      (a, b) => new Date(b.dateTime) - new Date(a.dateTime),
    );

    return [...sortedUpcoming, ...sortedPast];
  }, [fetchedShows]);

  // Pagination
  if (loading)
    return (
      <div className={styles.showsContainer}>
        <h1 className={styles.title}>SHOWS</h1>
        <p>Carregando shows...</p>
      </div>
    );

  const totalPages = Math.ceil(sortedConcerts.length / ITEMS_PER_PAGE);
  const currentSlice = sortedConcerts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <div className={styles.showsContainer}>
      <h1 className={styles.title}>SHOWS</h1>
      {error && (
        <div style={{ color: "red" }}>Erro ao buscar shows: {error}</div>
      )}
      <div className={styles.showsList}>
        {currentSlice.length > 0 ? (
          currentSlice.map((show, idx) => (
            <MemoShowRow
              key={show.id ?? `${show.dateTime ?? "no-date"}-${idx}`}
              {...show}
            />
          ))
        ) : (
          <p>Nenhum show encontrado.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={`${components.btn} ${styles.showBtn}`}
          >
            Anterior
          </button>
          <span>
            Página {page} de {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={`${components.btn} ${styles.showBtn}`}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default Shows;
