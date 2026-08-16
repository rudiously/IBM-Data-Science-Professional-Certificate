// Supabase Configuration
// IMPORTANT: Replace these with your actual Supabase credentials after creating your project

const SUPABASE_URL = 'https://setqjejhlomluanzhxpk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldHFqZWpobG9tbHVhbnpoeHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NzY2MjcsImV4cCI6MjA4NjA1MjYyN30.gyU1ZMZ3-wsLij0iMzHK76C_xI9gNHvwwMt1FI5ZnY0';

// Initialize Supabase client (wait for SDK to load)
let supabase;
if (typeof window !== 'undefined' && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase client initialized');
} else {
    console.error('❌ Supabase SDK not loaded yet');
}

// Database functions
const SupabaseDB = {
    // Save trek data to Supabase
    async saveTrekData(data) {
        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized');
            }

            // Check if data exists
            const { data: existing } = await supabase
                .from('trek_data')
                .select('id')
                .limit(1)
                .single();

            if (existing) {
                // Update existing record
                const { error } = await supabase
                    .from('trek_data')
                    .update({ data: data })
                    .eq('id', existing.id);
                
                if (error) throw error;
            } else {
                // Insert new record
                const { error } = await supabase
                    .from('trek_data')
                    .insert([{ data: data }]);
                
                if (error) throw error;
            }
            
            console.log('✅ Data saved to Supabase successfully!');
            return { success: true };
        } catch (error) {
            console.error('❌ Error saving to Supabase:', error);
            return { success: false, error: error.message };
        }
    },

    // Load trek data from Supabase
    async loadTrekData() {
        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized');
            }

            const { data, error } = await supabase
                .from('trek_data')
                .select('data')
                .limit(1)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    // No data found, return default
                    console.log('ℹ️ No data in Supabase yet, using defaults');
                    return null;
                }
                throw error;
            }

            console.log('✅ Data loaded from Supabase successfully!');
            return data.data;
        } catch (error) {
            console.error('❌ Error loading from Supabase:', error);
            return null;
        }
    }
};
