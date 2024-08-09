function showContent(section, cropName) {
    let contentDiv = document.getElementById('content');
    let body = document.body;
    if (section === 'Home') {
        body.classList.add('home-page');
    } else {
        body.classList.remove('home-page');
    }
    if (section === 'Crop Information') {
        contentDiv.innerHTML = getCropList();
    } else if (section === 'Sell Stock') {
        contentDiv.innerHTML = getSellStock();
    } else {
        switch (section) {
            case 'Home':
                contentDiv.innerHTML = `
                    <h2>Welcome to Green Guide</h2>
                    <p>Select a section from the navigation bar.</p>
                    <section id="about-us">
                        <h2>About Us</h2>
                        <p>Welcome to Green Guide, your ultimate resource for managing your farm efficiently and effectively. Our website is designed with farmers in mind, offering a range of tools and information to help you make informed decisions and improve your farming practices.</p>
                        <p>Whether you're looking for detailed crop information, tips on selling your farm stock, or just want to get in touch with us, we've got you covered. Our goal is to provide valuable insights and support to help you achieve success in your farming endeavors.</p>
                        <p>Explore our sections to learn more about various crops, get expert advice on managing your farm, and connect with us for any inquiries or support.</p>
                    </section>
                `;
                break;
            case 'Contact us':
                contentDiv.innerHTML = getContactForm();
                initializeContactForm();
                break;
            case 'Crop Details':
                contentDiv.innerHTML = getCropDetails(cropName);
                break;
        }
    }
}



function initializeContactForm() {
    let form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('form-feedback').innerHTML = '<p>Thank you for contacting us! We will get back to you soon.</p>';
            form.reset();
        });
    }
}

function getCropList() {
    return `
        <h2>Select a Crop</h2>
        <div class="crop-grid">
            ${getCropCard('Rice', 'rice.jpg')}
            ${getCropCard('Maize', 'maize.jpg')}
            ${getCropCard('Wheat', 'wheat.jpg')}
            ${getCropCard('Millets', 'millets.jpg')}
            ${getCropCard('Pulses', 'pulses.jpeg')}
            ${getCropCard('Coffee', 'coffee.jpeg')}
            ${getCropCard('Sugarcane', 'sugarcane.jpeg')}
            ${getCropCard('Cotton', 'cotton.jpg')}
            ${getCropCard('Jute', 'jute.jpeg')}
        </div>
    `;
}

function getCropCard(cropName, imgSrc) {
    return `
        <div class="crop-card">
            <img src="${imgSrc}" alt="${cropName}" class="crop-image">
            <button onclick="showContent('Crop Details', '${cropName}')">Show ${cropName} Details</button>
        </div>
    `;
}


function getCropDetails(cropType) {
    let cropData = {
        'Rice': {
            imgSrc: 'https://example.com/tomato.jpg',
            symptoms: 'Dark spots on leaves, stems, and fruit; white mold.',
            causes: 'Fungal infection caused by Phytophthora infestans.',
            prevention: 'Use resistant varieties, practice crop rotation, and ensure good air circulation.',
            treatment: 'Apply fungicides and remove affected plant parts.'
        },
        'Maize': {
            imgSrc: 'https://example.com/cucumber.jpg',
            symptoms: 'White, powdery spots on leaves and stems.',
            causes: 'Fungal pathogen Podosphaera xanthii.',
            prevention: 'Maintain proper spacing between plants, avoid overhead watering.',
            treatment: 'Use fungicides and remove infected plant parts.'
        },
    };

    let crop = cropData[cropType];
    if (crop) {
        return `
            <h2>${cropType} Details</h2>
            <img src="${crop.imgSrc}" alt="${cropType}" style="max-width: 100%; border-radius: 8px;">
            <h3>Symptoms</h3>
            <p>${crop.symptoms}</p>
            <h3>Causes</h3>
            <p>${crop.causes}</p>
            <h3>Prevention</h3>
            <p>${crop.prevention}</p>
            <h3>Treatment</h3>
            <p>${crop.treatment}</p>
            <p><button onclick="showContent('Crop Information')">Back to Crop List</button></p>
        `;
    } else {
        return '<h2>Crop Information</h2><p>No information available for this crop.</p>';
    }
}


function getContactForm() {
    return `
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
        <div id="form-feedback"></div>
    `;
}
function getSellStock() {
    return `
        <h2>Sell Stock</h2>
        <div class="sell-stock-grid">
            ${getSellStockCard('Rice', 'rice.jpg', '$50 per ton')}
            ${getSellStockCard('Maize', 'maize.jpg', '$40 per ton')}
            ${getSellStockCard('Wheat', 'wheat.jpg', '$45 per ton')}
            ${getSellStockCard('Millets', 'millets.jpg', '$55 per ton')}
            ${getSellStockCard('Pulses', 'pulses.jpeg', '$60 per ton')}
            ${getSellStockCard('Coffee', 'coffee.jpeg', '$70 per ton')}
            ${getSellStockCard('Sugarcane', 'sugarcane.jpeg', '$65 per ton')}
            ${getSellStockCard('Cotton', 'cotton.jpg', '$80 per ton')}
            ${getSellStockCard('Jute', 'jute.jpeg', '$75 per ton')}
        </div>
    `;
}

function getSellStockCard(cropName, imgSrc, price) {
    return `
        <div class="sell-stock-card">
            <img src="${imgSrc}" alt="${cropName}">
            <h3>${cropName}</h3>
            <p>Price: ${price}</p>
        </div>
    `;
}
