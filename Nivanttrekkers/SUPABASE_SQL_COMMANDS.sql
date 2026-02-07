-- ============================================
-- SUPABASE SQL SETUP FOR NIVANT TREKKERS
-- ============================================
-- Copy and paste this entire script into Supabase SQL Editor
-- Then click "Run" or press Ctrl+Enter

-- Step 1: Create the main table
CREATE TABLE trek_data (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    data JSONB NOT NULL
);

-- Step 2: Add table comment
COMMENT ON TABLE trek_data IS 'Stores all trek information for Nivant Trekkers website';

-- Step 3: Create index for better performance
CREATE INDEX idx_trek_data_created_at ON trek_data(created_at DESC);

-- Step 4: Enable Row Level Security
ALTER TABLE trek_data ENABLE ROW LEVEL SECURITY;

-- Step 5: Create policy for public read access
CREATE POLICY "Allow public read access" ON trek_data
    FOR SELECT
    USING (true);

-- Step 6: Create policy for public insert
CREATE POLICY "Allow public insert" ON trek_data
    FOR INSERT
    WITH CHECK (true);

-- Step 7: Create policy for public update
CREATE POLICY "Allow public update" ON trek_data
    FOR UPDATE
    USING (true)
    WITH CHECK (true);

-- Step 8: Create function to auto-update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Step 9: Create trigger for auto-updating updated_at
CREATE TRIGGER update_trek_data_updated_at
    BEFORE UPDATE ON trek_data
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VERIFICATION QUERIES (Optional - Run separately)
-- ============================================

-- Check if table was created
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_name = 'trek_data';

-- Check table structure
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'trek_data'
ORDER BY ordinal_position;

-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'trek_data';

-- Check if table is empty (should return 0 initially)
SELECT COUNT(*) FROM trek_data;

-- ============================================
-- SAMPLE DATA (Optional - For testing)
-- ============================================

-- Insert sample trek data
INSERT INTO trek_data (data) VALUES (
    '{
        "trekName": "Rajgad Fort",
        "route": "Pune - Rajgad",
        "difficulty": "Moderate",
        "trekDate": "2024-12-15",
        "trekTime": "6:00 AM",
        "trekImages": [],
        "fortDetails": {
            "name": "Rajgad",
            "grade": "Hill Fort",
            "elevation": "1376 meters",
            "region": "Sahyadri"
        },
        "history": "Rajgad was the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj for almost 26 years.",
        "pickupPoints": [
            {"location": "Swargate", "time": "5:00 AM"},
            {"location": "Katraj", "time": "5:30 AM"}
        ],
        "itinerary": [
            {"time": "6:00 AM", "activity": "Start trek from base"},
            {"time": "9:00 AM", "activity": "Reach summit"},
            {"time": "12:00 PM", "activity": "Lunch break"},
            {"time": "2:00 PM", "activity": "Descend"},
            {"time": "5:00 PM", "activity": "Return to Pune"}
        ],
        "fees": {
            "pune": "₹1200"
        },
        "inclusions": [
            "Transport from Pune",
            "Breakfast",
            "Lunch",
            "Trek Guide",
            "First Aid"
        ],
        "thingsToCarry": [
            "Water bottle (2L)",
            "Trekking shoes",
            "Cap/Hat",
            "Sunscreen",
            "ID Proof",
            "Personal medicines"
        ],
        "instructions": [
            "Carry valid ID proof",
            "Be on time at pickup point",
            "Wear comfortable trekking shoes",
            "Follow guide instructions",
            "Do not litter"
        ],
        "contacts": [
            {"name": "Organizer", "phone": "9075760770"}
        ],
        "instagram": "@nivanttrekkers"
    }'::jsonb
);

-- ============================================
-- USEFUL QUERIES FOR MANAGEMENT
-- ============================================

-- View all trek data
SELECT id, created_at, updated_at, data->>'trekName' as trek_name
FROM trek_data
ORDER BY created_at DESC;

-- Get the latest trek data
SELECT data
FROM trek_data
ORDER BY created_at DESC
LIMIT 1;

-- Update trek data (if needed)
UPDATE trek_data
SET data = jsonb_set(data, '{trekName}', '"New Trek Name"')
WHERE id = 'your-trek-id-here';

-- Delete all data (use with caution!)
-- DELETE FROM trek_data;

-- ============================================
-- BACKUP QUERY
-- ============================================

-- Export all data as JSON (copy result to save as backup)
SELECT json_agg(row_to_json(trek_data)) 
FROM trek_data;

-- ============================================
-- NOTES
-- ============================================
-- 1. Run the main script (lines 1-60) first
-- 2. Verification queries are optional
-- 3. Sample data is for testing only
-- 4. Keep this file for reference
-- 5. Never share your API keys publicly
-- ============================================
