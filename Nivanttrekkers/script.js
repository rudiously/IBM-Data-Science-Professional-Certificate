// Load trek data from Supabase (with localStorage fallback)
async function loadTrekData() {
    console.log('🔍 Loading trek data...');
    
    // Try to load from Supabase first
    if (typeof SupabaseDB !== 'undefined') {
        console.log('📡 SupabaseDB found, loading from Supabase...');
        const supabaseData = await SupabaseDB.loadTrekData();
        if (supabaseData) {
            console.log('✅ Using data from Supabase:', supabaseData.trekName);
            return supabaseData;
        } else {
            console.log('⚠️ No data from Supabase, trying localStorage...');
        }
    } else {
        console.log('❌ SupabaseDB not defined, trying localStorage...');
    }
    
    // Fallback to localStorage
    const localData = localStorage.getItem('trekData');
    if (localData) {
        console.log('📦 Using data from localStorage');
        return JSON.parse(localData);
    }
    
    // Return default data
    console.log('🆕 Using default data');
    return getDefaultData();
}

// Initialize and load data
let trekData;

// Default data for first-time visitors
function getDefaultData() {
    return {
        trekName: "Rajgad",
        route: "Pune - Rajgad",
        difficulty: "Moderate",
        trekDate: "",
        trekTime: "",
        trekImages: [],
        fortDetails: {
            name: "Add details in admin panel",
            grade: "-",
            elevation: "-",
            region: "Sahyadri"
        },
        history: "Welcome to Nivant Trekkers! Please visit the admin panel to add trek details.",
        pickupPoints: [],
        itinerary: [],
        fees: { pune: "Contact for pricing" },
        inclusions: [],
        thingsToCarry: [],
        instructions: [],
        contacts: [],
        instagram: "@nivanttrekkers"
    };
}

// HOME PAGE (index.html) - KHALITA
if (document.querySelector('.khalita-container') && !document.querySelector('.trek-document')) {
    // Set date in Marathi
    const dateEl = document.getElementById('khalitaDate');
    if (dateEl) {
        const today = new Date();
        const marathiMonths = ['जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून', 
                               'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'];
        dateEl.textContent = `दिनांक: ${today.getDate()} ${marathiMonths[today.getMonth()]} ${today.getFullYear()}`;
    }

    // Load missions list
    const missionsList = document.getElementById('missionsList');
    if (missionsList) {
        const missionCard = `
            <div class="mission-card" onclick="window.location.href='trek.html'">
                <h3 class="mission-title">मोहीम: ${trekData.trekName}</h3>
                <p class="mission-details">मार्ग: ${trekData.route} | कठीणपणा: ${trekData.difficulty}</p>
            </div>
        `;
        missionsList.innerHTML = missionCard;
    }
}

// TREK DETAILS PAGE (trek.html)
if (document.querySelector('.trek-document')) {
    // Load data asynchronously
    loadTrekData().then(data => {
        trekData = data;
        renderTrekPage();
    });
}

function renderTrekPage() {
    // Set page title
    document.getElementById('trekPageTitle').textContent = `Trek: ${trekData.trekName}`;
    
    // Display date if available
    const trekHeader = document.querySelector('.trek-header');
    if (trekData.trekDate) {
        const dateDisplay = document.createElement('p');
        dateDisplay.className = 'trek-date-display';
        dateDisplay.style.cssText = 'text-align: center; color: var(--kesari); font-size: 1.1rem; margin-top: 0.5rem; font-family: "Tiro Devanagari Marathi", serif;';
        
        // Format date nicely
        const date = new Date(trekData.trekDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let dateText = date.toLocaleDateString('en-US', options);
        
        if (trekData.trekTime) {
            dateText += ` at ${trekData.trekTime}`;
        }
        
        dateDisplay.innerHTML = `📅 ${dateText}`;
        trekHeader.appendChild(dateDisplay);
    }

    // Fort Details
    const fortCard = document.getElementById('fortCard');
    fortCard.innerHTML = `
        <div class="fort-item">
            <h3>Fort Name</h3>
            <p>${trekData.fortDetails.name}</p>
        </div>
        <div class="fort-item">
            <h3>Grade</h3>
            <p>${trekData.fortDetails.grade}</p>
        </div>
        <div class="fort-item">
            <h3>Elevation</h3>
            <p>${trekData.fortDetails.elevation}</p>
        </div>
        <div class="fort-item">
            <h3>Region</h3>
            <p>${trekData.fortDetails.region}</p>
        </div>
    `;

    // History
    const historyContent = document.getElementById('historyContent');
    historyContent.innerHTML = `<p>${trekData.history}</p>`;

    // Image Gallery
    const imageGallery = document.getElementById('imageGallery');
    if (trekData.trekImages && trekData.trekImages.length > 0) {
        imageGallery.innerHTML = trekData.trekImages.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Trek Image">
            </div>
        `).join('');
    } else {
        imageGallery.innerHTML = '<p style="text-align: center; color: #999;">No images added yet. Add images from the admin panel.</p>';
    }

    // Pickup Points
    const pickupTable = document.getElementById('pickupTable');
    if (trekData.pickupPoints && trekData.pickupPoints.length > 0) {
        pickupTable.innerHTML = trekData.pickupPoints.map(point => `
            <div class="pickup-row">
                <div class="pickup-location">${point.location}</div>
                <div class="pickup-time">${point.time}</div>
            </div>
        `).join('');
    } else {
        pickupTable.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">No pickup points added yet.</p>';
    }

    // Itinerary Timeline
    const timeline = document.getElementById('timeline');
    if (trekData.itinerary && trekData.itinerary.length > 0) {
        timeline.innerHTML = trekData.itinerary.map(item => `
            <div class="timeline-item">
                <div class="timeline-time">${item.time}</div>
                <div class="timeline-activity">${item.activity}</div>
            </div>
        `).join('');
    } else {
        timeline.innerHTML = '<p style="text-align: center; color: #999;">No itinerary added yet.</p>';
    }

    // Fees
    const feesCard = document.getElementById('feesCard');
    feesCard.innerHTML = `
        <h3>From Pune</h3>
        <div class="fees-amount">${trekData.fees.pune}</div>
    `;

    // Inclusions
    const inclusionsGrid = document.getElementById('inclusionsGrid');
    if (trekData.inclusions && trekData.inclusions.length > 0) {
        inclusionsGrid.innerHTML = trekData.inclusions.map(item => `
            <div class="inclusion-item">${item}</div>
        `).join('');
    } else {
        inclusionsGrid.innerHTML = '<p style="text-align: center; color: #999;">No inclusions added yet.</p>';
    }

    // Things to Carry
    const carryGrid = document.getElementById('carryGrid');
    if (trekData.thingsToCarry && trekData.thingsToCarry.length > 0) {
        carryGrid.innerHTML = trekData.thingsToCarry.map(item => `
            <div class="carry-item">${item}</div>
        `).join('');
    } else {
        carryGrid.innerHTML = '<p style="text-align: center; color: #999;">No items added yet.</p>';
    }

    // Instructions
    const instructionsList = document.getElementById('instructionsList');
    if (trekData.instructions && trekData.instructions.length > 0) {
        instructionsList.innerHTML = trekData.instructions.map(item => `
            <div class="instruction-item">${item}</div>
        `).join('');
    } else {
        instructionsList.innerHTML = '<p style="text-align: center; color: #999;">No instructions added yet.</p>';
    }

    // Contact
    const contactContent = document.getElementById('contactContent');
    let contactHTML = '';
    
    // Add default Nivant Trekkers contact
    contactHTML += '<div class="contact-grid">';
    contactHTML += `
        <div class="contact-card">
            <h3>Email</h3>
            <a href="mailto:nivanttrekkers@gmail.com">nivanttrekkers@gmail.com</a>
        </div>
        <div class="contact-card">
            <h3>Phone</h3>
            <a href="tel:9075760770">9075760770</a>
        </div>
    `;
    
    if (trekData.contacts && trekData.contacts.length > 0) {
        trekData.contacts.forEach(contact => {
            contactHTML += `
                <div class="contact-card">
                    <h3>${contact.name}</h3>
                    <a href="tel:${contact.phone}">${contact.phone}</a>
                </div>
            `;
        });
    }
    contactHTML += '</div>';
    
    contactHTML += `
        <a href="https://chat.whatsapp.com/Cz991ddpp1yCvbHKctLlkR?mode=gi_t" 
           target="_blank" 
           class="whatsapp-link">
            💬 Join WhatsApp Community
        </a>
        <a href="https://instagram.com/${trekData.instagram.replace('@', '')}" 
           target="_blank" 
           class="instagram-link">
            📸 Follow us on Instagram ${trekData.instagram}
        </a>
    `;
    
    contactContent.innerHTML = contactHTML;

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
