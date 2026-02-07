// Initialize counters
let pickupCount = 0;
let itineraryCount = 0;
let inclusionCount = 0;
let carryCount = 0;
let instructionCount = 0;
let contactCount = 0;

// Load existing data on page load
window.addEventListener('DOMContentLoaded', async () => {
    await loadExistingData();
    addPickupPoint();
    addItinerary();
    addInclusion();
    addCarryItem();
    addInstruction();
    addContact();
});

// Load existing data from Supabase (with localStorage fallback)
async function loadExistingData() {
    let data = null;
    
    // Try to load from Supabase first
    if (typeof SupabaseDB !== 'undefined') {
        data = await SupabaseDB.loadTrekData();
        console.log('📥 Loaded from Supabase:', data);
    }
    
    // Fallback to localStorage if Supabase fails
    if (!data) {
        const localData = localStorage.getItem('trekData');
        if (localData) {
            data = JSON.parse(localData);
            console.log('📥 Loaded from localStorage:', data);
        }
    }
    
    if (!data) return;

    document.getElementById('trekName').value = data.trekName || '';
    document.getElementById('route').value = data.route || '';
    document.getElementById('difficulty').value = data.difficulty || 'Moderate';
    document.getElementById('trekDate').value = data.trekDate || '';
    document.getElementById('trekTime').value = data.trekTime || '';
    document.getElementById('fortName').value = data.fortDetails?.name || '';
    document.getElementById('fortGrade').value = data.fortDetails?.grade || '';
    document.getElementById('fortElevation').value = data.fortDetails?.elevation || '';
    document.getElementById('fortRegion').value = data.fortDetails?.region || '';
    document.getElementById('history').value = data.history || '';
    document.getElementById('feesPune').value = data.fees?.pune || '';
    document.getElementById('instagram').value = data.instagram || '@nivanttrekkers';

    // Show trek images preview
    if (data.trekImages && data.trekImages.length > 0) {
        const preview = document.getElementById('trekImagesPreview');
        preview.innerHTML = data.trekImages.map(img => 
            `<img src="${img}" class="preview-img" alt="Trek">`
        ).join('');
    }
    
    // Load pickup points
    if (data.pickupPoints && data.pickupPoints.length > 0) {
        const container = document.getElementById('pickupPointsContainer');
        container.innerHTML = ''; // Clear default
        data.pickupPoints.forEach(point => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Location" class="pickup-location" value="${point.location}" />
                <input type="text" placeholder="Time" class="pickup-time" value="${point.time}" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
    
    // Load itinerary
    if (data.itinerary && data.itinerary.length > 0) {
        const container = document.getElementById('itineraryContainer');
        container.innerHTML = ''; // Clear default
        data.itinerary.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Time" class="itinerary-time" value="${item.time}" />
                <input type="text" placeholder="Activity" class="itinerary-activity" value="${item.activity}" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
    
    // Load inclusions
    if (data.inclusions && data.inclusions.length > 0) {
        const container = document.getElementById('inclusionsContainer');
        container.innerHTML = ''; // Clear default
        data.inclusions.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Inclusion item" class="inclusion-item" value="${item}" style="grid-column: 1 / 3;" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
    
    // Load things to carry
    if (data.thingsToCarry && data.thingsToCarry.length > 0) {
        const container = document.getElementById('carryContainer');
        container.innerHTML = ''; // Clear default
        data.thingsToCarry.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Item to carry" class="carry-item" value="${item}" style="grid-column: 1 / 3;" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
    
    // Load instructions
    if (data.instructions && data.instructions.length > 0) {
        const container = document.getElementById('instructionsContainer');
        container.innerHTML = ''; // Clear default
        data.instructions.forEach(item => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Important instruction" class="instruction-item" value="${item}" style="grid-column: 1 / 3;" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
    
    // Load contacts
    if (data.contacts && data.contacts.length > 0) {
        const container = document.getElementById('contactsContainer');
        container.innerHTML = ''; // Clear default
        data.contacts.forEach(contact => {
            const div = document.createElement('div');
            div.className = 'dynamic-item';
            div.innerHTML = `
                <input type="text" placeholder="Name" class="contact-name" value="${contact.name}" />
                <input type="text" placeholder="Phone Number" class="contact-phone" value="${contact.phone}" />
                <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
            `;
            container.appendChild(div);
        });
    }
}

// Add pickup point
function addPickupPoint() {
    const container = document.getElementById('pickupPointsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Location" class="pickup-location" />
        <input type="text" placeholder="Time" class="pickup-time" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    pickupCount++;
}

// Add itinerary item
function addItinerary() {
    const container = document.getElementById('itineraryContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Time" class="itinerary-time" />
        <input type="text" placeholder="Activity" class="itinerary-activity" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    itineraryCount++;
}

// Add inclusion
function addInclusion() {
    const container = document.getElementById('inclusionsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Inclusion item" class="inclusion-item" style="grid-column: 1 / 3;" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    inclusionCount++;
}

// Add carry item
function addCarryItem() {
    const container = document.getElementById('carryContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Item to carry" class="carry-item" style="grid-column: 1 / 3;" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    carryCount++;
}

// Add instruction
function addInstruction() {
    const container = document.getElementById('instructionsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Important instruction" class="instruction-item" style="grid-column: 1 / 3;" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    instructionCount++;
}

// Add contact
function addContact() {
    const container = document.getElementById('contactsContainer');
    const div = document.createElement('div');
    div.className = 'dynamic-item';
    div.innerHTML = `
        <input type="text" placeholder="Name" class="contact-name" />
        <input type="text" placeholder="Phone Number" class="contact-phone" />
        <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
    `;
    container.appendChild(div);
    contactCount++;
}

// Handle trek images upload
document.getElementById('trekImages').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    const preview = document.getElementById('trekImagesPreview');
    preview.innerHTML = '';
    
    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.className = 'preview-img';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

// Form submission
document.getElementById('adminForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Show loading state
    const saveBtn = document.querySelector('.save-btn');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = '💾 Saving...';
    saveBtn.disabled = true;

    // Get trek images
    let trekImages = [];
    const trekFiles = Array.from(document.getElementById('trekImages').files);
    if (trekFiles.length > 0) {
        for (const file of trekFiles) {
            const base64 = await fileToBase64(file);
            trekImages.push(base64);
        }
    } else {
        const existingData = JSON.parse(localStorage.getItem('trekData'));
        trekImages = existingData?.trekImages || [];
    }

    // Get pickup points
    const pickupPoints = Array.from(document.querySelectorAll('#pickupPointsContainer .dynamic-item')).map(item => ({
        location: item.querySelector('.pickup-location').value,
        time: item.querySelector('.pickup-time').value
    })).filter(p => p.location && p.time);

    // Get itinerary
    const itinerary = Array.from(document.querySelectorAll('#itineraryContainer .dynamic-item')).map(item => ({
        time: item.querySelector('.itinerary-time').value,
        activity: item.querySelector('.itinerary-activity').value
    })).filter(i => i.time && i.activity);

    // Get inclusions
    const inclusions = Array.from(document.querySelectorAll('#inclusionsContainer .dynamic-item')).map(item => 
        item.querySelector('.inclusion-item').value
    ).filter(i => i);

    // Get things to carry
    const thingsToCarry = Array.from(document.querySelectorAll('#carryContainer .dynamic-item')).map(item => 
        item.querySelector('.carry-item').value
    ).filter(i => i);

    // Get instructions
    const instructions = Array.from(document.querySelectorAll('#instructionsContainer .dynamic-item')).map(item => 
        item.querySelector('.instruction-item').value
    ).filter(i => i);

    // Get contacts
    const contacts = Array.from(document.querySelectorAll('#contactsContainer .dynamic-item')).map(item => ({
        name: item.querySelector('.contact-name').value,
        phone: item.querySelector('.contact-phone').value
    })).filter(c => c.name && c.phone);

    // Build data object
    const trekData = {
        trekName: document.getElementById('trekName').value,
        route: document.getElementById('route').value,
        difficulty: document.getElementById('difficulty').value,
        trekDate: document.getElementById('trekDate').value,
        trekTime: document.getElementById('trekTime').value,
        trekImages: trekImages,
        fortDetails: {
            name: document.getElementById('fortName').value,
            grade: document.getElementById('fortGrade').value,
            elevation: document.getElementById('fortElevation').value,
            region: document.getElementById('fortRegion').value
        },
        history: document.getElementById('history').value,
        pickupPoints: pickupPoints,
        itinerary: itinerary,
        fees: {
            pune: document.getElementById('feesPune').value
        },
        inclusions: inclusions,
        thingsToCarry: thingsToCarry,
        instructions: instructions,
        contacts: contacts,
        instagram: document.getElementById('instagram').value || '@nivanttrekkers'
    };

    // Save to localStorage (backup)
    localStorage.setItem('trekData', JSON.stringify(trekData));
    console.log('💾 Saved to localStorage');

    // Save to Supabase (if configured)
    if (typeof SupabaseDB !== 'undefined') {
        console.log('📤 Sending to Supabase...', trekData);
        const result = await SupabaseDB.saveTrekData(trekData);
        console.log('📥 Supabase result:', result);
        
        if (result.success) {
            alert('✅ All changes saved successfully to Supabase!\n\nRefresh trek.html to see changes.');
        } else {
            alert('⚠️ Saved locally, but cloud sync failed. Check console for details.\n\nData is still saved in your browser.');
        }
    } else {
        console.error('❌ SupabaseDB not defined!');
        alert('✅ All changes saved successfully!\n\nNote: To sync across devices, complete Supabase setup.');
    }

    // Reset button
    saveBtn.textContent = originalText;
    saveBtn.disabled = false;
});

// Helper function to convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
