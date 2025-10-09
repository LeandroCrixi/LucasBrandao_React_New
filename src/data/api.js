
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://kmjajlmmkwtaobmgsgyo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttamFqbG1ta3d0YW9ibWdzZ3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NTA3NzEsImV4cCI6MjA3NTUyNjc3MX0.uabn6koBGP4EXfufkfOlTRBXmoUQN4ycQFZelk3rmK8'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const fetchData = async () => {
    try {
        const { data, error } = await supabase
            .from('shows')
            .select(`
                day, weekDay, month, year, dateTime, time, 
                venues(name, address, googleLink, appleLink)`)

        if (error) {
            // Log the full error object for easier debugging (policies, status, details)
            // console.error('Supabase error selecting shows:', error);
            throw error;
        }
        // Helpful debug log so callers see exactly what Supabase returned
        // console.log('supabase response', { data, error });
        return data;
    } catch (error) {
        // If there's an exception, log the full object so we can inspect stack/status
        console.error('Error fetching data:', error);
        // Re-throw so callers can also handle errors if needed
        throw error;
    }
}

const fetchVenues = async () => {
    try {
        const { data, error } = await supabase
            .from('venues')
            .select('*')

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error fetching venues:', error);
        throw error;
    }
}

const upsertVenue = async (venue) => {
    try {
        // avoid sending explicit null id for new rows (serial PK)
        const payload = { ...venue };
        // if (payload.id === null || payload.id === undefined || payload.id === '') {
        //     delete payload.id;
        // }

        const { data, error } = await supabase
            .from('venues')
            // .upsert(payload, { onConflict: 'id' })
            .upsert(payload)
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error upserting venue:', error);
        throw error;
    }
}

const upsertShow = async (show) => {
    try {
        // avoid sending explicit null id for new rows (serial PK)
        const payload = { ...show };
        // if (payload.id === null || payload.id === undefined || payload.id === '') {
        //     delete payload.id;
        // }

        const { data, error } = await supabase
            .from('shows')
            // .upsert(payload, { onConflict: 'id' })
            .upsert(payload)
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error upserting show:', error);
        throw error;
    }
}

const deleteShow = async (id) => {
    try {
        const { data, error } = await supabase
            .from('shows')
            .delete()
            .eq('id', id)
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error deleting show:', error);
        throw error;
    }
}

export { fetchData, fetchVenues, upsertVenue, upsertShow, deleteShow }