# Google Sheets Backend Setup

## Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it: "Nivant Trekkers Data"
4. In cell A1, paste this entire JSON structure:

```json
{
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
  "fees": {"pune": "₹1200"},
  "inclusions": ["Transport from Pune", "Breakfast", "Lunch", "Trek Guide", "First Aid"],
  "thingsToCarry": ["Water bottle (2L)", "Trekking shoes", "Cap/Hat", "Sunscreen", "ID Proof", "Personal medicines"],
  "instructions": ["Carry valid ID proof", "Be on time at pickup point", "Wear comfortable trekking shoes", "Follow guide instructions", "Do not litter"],
  "contacts": [{"name": "Organizer", "phone": "9075760770"}],
  "instagram": "@nivanttrekkers"
}
```

## Step 2: Publish Sheet as Web App

1. Click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = sheet.getRange('A1').getValue();
  
  return ContentService
    .createTextOutput(data)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = e.postData.contents;
  
  sheet.getRange('A1').setValue(data);
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy** → **New deployment**
5. Click gear icon → Select **Web app**
6. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Copy the **Web app URL** (looks like: https://script.google.com/macros/s/xxxxx/exec)

## Step 3: Update Your Website

I'll update the code to use your Google Sheets URL instead of Supabase.

Just give me the Web app URL and I'll integrate it!
