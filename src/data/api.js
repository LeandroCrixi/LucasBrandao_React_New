
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://kmjajlmmkwtaobmgsgyo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttamFqbG1ta3d0YW9ibWdzZ3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NTA3NzEsImV4cCI6MjA3NTUyNjc3MX0.uabn6koBGP4EXfufkfOlTRBXmoUQN4ycQFZelk3rmK8'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const fetchShows = async () => {
    try {
        const { data, error } = await supabase
            .from('shows')
            .select(`
                day, weekDay, month, year, dateTime, time, 
                venues(name, address, googleLink, appleLink)`)

        if (error) {
            // console.error('Supabase error selecting shows:', error);
            throw error;
        }
        // console.log('supabase response', { data, error });
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
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

export { fetchShows, fetchVenues, upsertVenue, upsertShow, deleteShow }