import { useEffect, useState } from 'react';
import styles from './Adm.module.css';
import components from '../../styles/components/components.module.css';
import { fetchData, fetchVenues, upsertVenue, upsertShow, deleteShow } from '../../data/api';

const emptyVenue = { id: null, name: '', address: '', googleLink: '', appleLink: '' };
const emptyShow = { id: null, day: '', weekDay: '', month: '', year: '', dateTime: '', time: '', venueId: null };

const Adm = () => {
    const [shows, setShows] = useState([]);
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [venueForm, setVenueForm] = useState(emptyVenue);
    const [showForm, setShowForm] = useState(emptyShow);
    const [message, setMessage] = useState(null);

    const loadAll = async () => {
        setLoading(true);
        try {
            const [fetchedShows, fetchedVenues] = await Promise.all([fetchData(), fetchVenues()]);
            setShows(Array.isArray(fetchedShows) ? fetchedShows : []);
            setVenues(Array.isArray(fetchedVenues) ? fetchedVenues : []);
        } catch (err) {
            console.error('Error loading admin data:', err);
            setMessage({ type: 'error', text: String(err) });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAll();
    }, []);

    const handleVenueSave = async (e) => {
        e.preventDefault();
        try {
            // ensure we don't send an explicit null/empty id
            const payload = { ...venueForm };
            if (!payload.id) delete payload.id;
            await upsertVenue(payload);
            setMessage({ type: 'success', text: 'Venue saved' });
            setVenueForm(emptyVenue);
            await loadAll();
        } catch (err) {
            setMessage({ type: 'error', text: String(err) });
        }
    };

    const handleShowSave = async (e) => {
        e.preventDefault();
        try {
            // ensure we don't send an explicit null/empty id
            const payload = { ...showForm };
            if (!payload.id) delete payload.id;
            await upsertShow(payload);
            setMessage({ type: 'success', text: 'Show saved' });
            setShowForm(emptyShow);
            await loadAll();
        } catch (err) {
            setMessage({ type: 'error', text: String(err) });
        }
    };

    // const handleDeleteShow = async (id) => {
    //     if (!confirm('Delete show?')) return;
    //     try {
    //         await deleteShow(id);
    //         setMessage({ type: 'success', text: 'Show deleted' });
    //         await loadAll();
    //     } catch (err) {
    //         setMessage({ type: 'error', text: String(err) });
    //     }
    // };

    if (loading) return <div className={styles.container}><h1>Admin</h1><p>Loading...</p></div>;

    return (
        <main className={styles.container}>
            <h1>Admin</h1>

            {message && (
                <div className={message.type === 'error' ? styles.error : styles.success}>{message.text}</div>
            )}
            <section className={styles.formSection}>
                <h2>Casas de Show</h2>
                <form onSubmit={handleVenueSave} className={styles.form}>
                    <input placeholder="Nome da casa" value={venueForm.name} onChange={e => setVenueForm({ ...venueForm, name: e.target.value })} required />
                    <input placeholder="Endereço" value={venueForm.address} onChange={e => setVenueForm({ ...venueForm, address: e.target.value })} />
                    <input placeholder="googleLink" value={venueForm.googleLink} onChange={e => setVenueForm({ ...venueForm, googleLink: e.target.value })} />
                    <input placeholder="appleLink" value={venueForm.appleLink} onChange={e => setVenueForm({ ...venueForm, appleLink: e.target.value })} />
                    <div>
                        <button className={`${components.btn}`} type="submit">Salvar</button>
                        <button type="button" onClick={() => setVenueForm(emptyVenue)} className={`${components.btn}`}>Reset</button>
                    </div>
                </form>

                <div className={styles.list}>
                    {venues.map(v => (
                        <div key={v.id} className={styles.listItem}>
                            <div>{v.name}</div>
                            {/* <div>
                                <button className={`${components.btn}`} onClick={() => setVenueForm(v)}>Edit</button>
                            </div> */}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.formSection}>
                <h2>Shows</h2>
                <form onSubmit={handleShowSave} className={styles.form}>
                    <input placeholder="Data (AAAA-MM-DD)" value={showForm.dateTime} onChange={e => setShowForm({ ...showForm, dateTime: e.target.value })} required />
                    <input placeholder="Dia da Semana (Seg, Ter...)" value={showForm.weekDay} onChange={e => setShowForm({ ...showForm, weekDay: e.target.value })} required />
                    <input placeholder="hora (HH:MM)" value={showForm.time} onChange={e => setShowForm({ ...showForm, time: e.target.value })} />
                    <input placeholder="dia (1, 2, 20...)" value={showForm.day} onChange={e => setShowForm({ ...showForm, day: e.target.value })} />
                    <input placeholder="mês (Jan, Fev...)" value={showForm.month} onChange={e => setShowForm({ ...showForm, month: e.target.value })} />
                    <input placeholder="ano (2025)" value={showForm.year} onChange={e => setShowForm({ ...showForm, year: e.target.value })} />
                    <select value={showForm.venueId ?? ''} onChange={e => setShowForm({ ...showForm, venueId: e.target.value ? Number(e.target.value) : null })}>
                        <option value="">-- Selecione a Casa --</option>
                        {venues.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                    </select>

                    <div>
                        <button className={`${components.btn}`} type="submit">Salvar</button>
                        <button type="button" onClick={() => setShowForm(emptyShow)} className={`${components.btn}`}>Reset</button>
                    </div>
                </form>

                {/* <div className={styles.list}>
                    {shows.map((s, idx) => (
                        <div key={s.id ?? `${s.dateTime ?? 'no-date'}-${s.time ?? 'no-time'}-${idx}`} className={styles.listItem}>
                            <div>{s.dateTime} {s.time} - {s.venues?.name ?? s.venue?.name ?? 'Venue'}</div>
                            <div>
                                <button className={`${components.btn}`} onClick={() => setShowForm({ ...s, venueId: s.venueId ?? s.venue?.id })}>Edit</button>
                                <button className={`${components.btn}`} onClick={() => handleDeleteShow(s.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>
        </main>
    );
}

export default Adm;
