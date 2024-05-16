// donationItems.js

document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for donation items
    const donationItems = [
        // Clothes items
        {
            name: 'Winter Jacket',
            type: 'Jacket',
            age: 'adult',
            gender: 'male',
            season: 'winter',
            material: 'Wool',
            category: 'clothes',
            description: 'Warm jacket for cold weather'
        },
        {
            name: 'Summer Dress',
            type: 'Dress',
            age: 'child',
            gender: 'female',
            season: 'summer',
            material: 'Cotton',
            category: 'clothes',
            description: 'Light cotton dress for summer'
        },
        // School supplies items
        {
            name: 'Math Textbook',
            type: 'Book',
            category: 'schoolSupplies',
            description: 'Grade 10 Math Textbook',
            author: 'John Doe',
            language: 'English',
            edition: '2nd',
            summary: 'Comprehensive guide to high school mathematics.',
            picture: 'math-textbook.jpg'
        },
        {
            name: 'Notebook Pack',
            type: 'Stationary',
            category: 'schoolSupplies',
            description: 'Pack of 5 notebooks'
        },
        // Toys items
        {
            name: 'Toy Car',
            type: 'Toy',
            category: 'toys',
            description: 'Remote-controlled toy car',
            age: 'child',
            gender: 'male',
            toyCategory: 'cars',
            picture: 'toy-car.jpg'
        },
        {
            name: 'Stuffed Teddy Bear',
            type: 'Toy',
            category: 'toys',
            description: 'Soft and cuddly teddy bear',
            age: 'child',
            gender: 'all',
            toyCategory: 'stuffedToys',
            picture: 'stuffed-teddy-bear.jpg'
        },
        // Food items
        {
            name: 'Canned Beans',
            type: 'Canned Food',
            category: 'food',
            description: 'Canned beans',
            foodType: 'cannedFoods'
        },
        {
            name: 'Fresh Apples',
            type: 'Fruit',
            category: 'food',
            description: 'Freshly picked apples',
            foodType: 'fruitsVegetables',
            unit: 'KG'
        },
        // Medical supplies items
        {
            name: 'Bandages',
            type: 'Medical Device',
            category: 'medicalSupplies',
            description: 'Sterile bandages for wounds',
            deviceType: 'Bandage',
            use: 'Wound Care',
            picture: 'bandages.jpg'
        },
        {
            name: 'Stethoscope',
            type: 'Medical Equipment',
            category: 'medicalSupplies',
            description: 'Medical stethoscope',
            deviceType: 'Stethoscope',
            use: 'Diagnostic Tool',
            picture: 'stethoscope.jpg'
        },
        {
            name: 'Aspirin',
            type: 'Medication',
            category: 'medicalSupplies',
            description: 'Pain reliever',
            medicalUse: 'Pain Relief',
            picture: 'aspirin.jpg'
        },
        // Blood donations items
        {
            name: 'A+ Blood Donation',
            type: 'Blood Donation',
            category: 'bloodDonations',
            description: 'A+ blood needed urgently',
            bloodType: 'A+',
            hospitalName: 'City Hospital',
            hospitalArea: 'Downtown',
            governorate: 'Central',
            address: '123 Main St',
            mapMarker: 'https://maps.google.com/?q=123+Main+St'
        }
    ];

    // Display all items on initial load
    displayResults(donationItems);

    // Function to search items by category
    function searchItems(event) {
        event.preventDefault();

        const category = document.getElementById('category').value;

        // Show appropriate filter form based on selected category
        document.getElementById('clothesFilterForm').style.display = (category === 'clothes') ? 'block' : 'none';
        document.getElementById('schoolSuppliesFilterForm').style.display = (category === 'schoolSupplies') ? 'block' : 'none';
        document.getElementById('toysFilterForm').style.display = (category === 'toys') ? 'block' : 'none';
        document.getElementById('foodFilterForm').style.display = (category === 'food') ? 'block' : 'none';
        document.getElementById('medicalSuppliesFilterForm').style.display = (category === 'medicalSupplies') ? 'block' : 'none';
        document.getElementById('bloodDonationsFilterForm').style.display = (category === 'bloodDonations') ? 'block' : 'none';

        // Filter items based on selected category
        const filteredItems = category === 'all' ? donationItems : donationItems.filter(item => item.category === category);

        displayResults(filteredItems);
    }

    // Function to filter clothes by age, gender, and season
    function filterClothes(event) {
        event.preventDefault();

        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const season = document.getElementById('season').value;

        // Filter items based on selected criteria
        const filteredItems = donationItems.filter(item => {
            return item.category === 'clothes' &&
                   (age === 'all' || item.age === age) &&
                   (gender === 'all' || item.gender === gender) &&
                   (season === 'all' || item.season === season);
        });

        displayResults(filteredItems);
    }

    // Function to filter school supplies by type
    function filterSchoolSupplies(event) {
        event.preventDefault();

        const type = document.getElementById('type').value;

        // Filter items based on selected type
        const filteredItems = donationItems.filter(item => {
            return item.category === 'schoolSupplies' &&
                   (type === 'all' || item.type.toLowerCase() === type);
        });

        displayResults(filteredItems);
    }

    // Function to filter toys by age, gender, and category
    function filterToys(event) {
        event.preventDefault();

        const age = document.getElementById('toyAge').value;
        const gender = document.getElementById('toyGender').value;
        const toyCategory = document.getElementById('toyCategory').value;

        // Filter items based on selected criteria
        const filteredItems = donationItems.filter(item => {
            return item.category === 'toys' &&
                   (age === 'all' || item.age === age) &&
                   (gender === 'all' || item.gender === gender) &&
                   (toyCategory === 'all' || item.toyCategory === toyCategory);
        });

        displayResults(filteredItems);
    }

    // Function to filter food by type
    function filterFood(event) {
        event.preventDefault();

        const foodType = document.getElementById('foodType').value;

        // Filter items based on selected type
        const filteredItems = donationItems.filter(item => {
            return item.category === 'food' &&
                   (foodType === 'all' || item.foodType === foodType);
        });

        displayResults(filteredItems);
    }

    // Function to filter medical supplies by type
    function filterMedicalSupplies(event) {
        event.preventDefault();

        const medicalType = document.getElementById('medicalType').value;

        // Filter items based on selected type
        const filteredItems = donationItems.filter(item => {
            return item.category === 'medicalSupplies' &&
                   (medicalType === 'all' || item.type.toLowerCase() === medicalType);
        });

        displayResults(filteredItems);
    }

    // Function to filter blood donations by hospital, governorate, and area
    function filterBloodDonations(event) {
        event.preventDefault();

        const hospital = document.getElementById('hospital').value.toLowerCase();
        const governorate = document.getElementById('governorate').value.toLowerCase();
        const area = document.getElementById('area').value.toLowerCase();

        // Filter items based on selected criteria
        const filteredItems = donationItems.filter(item => {
            return item.category === 'bloodDonations' &&
                   (hospital === '' || item.hospitalName.toLowerCase().includes(hospital)) &&
                   (governorate === '' || item.governorate.toLowerCase().includes(governorate)) &&
                   (area === '' || item.hospitalArea.toLowerCase().includes(area));
        });

        displayResults(filteredItems);
    }

    // Function to display results
    function displayResults(items) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (items.length === 0) {
            resultsDiv.innerHTML = '<p>No items found.</p>';
            return;
        }

        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'result-item';
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${item.type ? `<p>Type: ${item.type}</p>` : ''}
                ${item.age ? `<p>Age: ${item.age}</p>` : ''}
                ${item.gender ? `<p>Gender: ${item.gender}</p>` : ''}
                ${item.season ? `<p>Season: ${item.season}</p>` : ''}
                ${item.material ? `<p>Material: ${item.material}</p>` : ''}
                ${item.author ? `<p>Author: ${item.author}</p>` : ''}
                ${item.language ? `<p>Language: ${item.language}</p>` : ''}
                ${item.edition ? `<p>Edition: ${item.edition}</p>` : ''}
                ${item.summary ? `<p>Summary: ${item.summary}</p>` : ''}
                ${item.picture ? `<img src="${item.picture}" alt="${item.name}">` : ''}
                ${item.bloodType ? `<p>Blood Type: ${item.bloodType}</p>` : ''}
                ${item.hospitalName ? `<p>Hospital: ${item.hospitalName}</p>` : ''}
                ${item.hospitalArea ? `<p>Area: ${item.hospitalArea}</p>` : ''}
                ${item.governorate ? `<p>Governorate: ${item.governorate}</p>` : ''}
                ${item.address ? `<p>Address: ${item.address}</p>` : ''}
                ${item.deviceType ? `<p>Device Type: ${item.deviceType}</p>` : ''}
                ${item.use ? `<p>Use: ${item.use}</p>` : ''}
                ${item.medicalUse ? `<p>Medical Use: ${item.medicalUse}</p>` : ''}
                ${item.mapMarker ? `<p><a href="${item.mapMarker}" target="_blank">View on Map</a></p>` : ''}
                <label for="donateQuantity-${item.name.replace(/\s+/g, '-')}" class="donate-label" ${item.category === 'bloodDonations' ? 'style="display:none;"' : ''}>Quantity to Donate</label>
                <input type="number" id="donateQuantity-${item.name.replace(/\s+/g, '-')}" name="donateQuantity" min="1" value="1" class="donate-input" ${item.category === 'bloodDonations' ? 'style="display:none;"' : ''}>
                <button class="donate-button" onclick="submitDonation('${encodeURIComponent(JSON.stringify(item))}')">Donate</button>
            `;
            resultsDiv.appendChild(itemDiv);
        });
    }

    // Function to handle donation submission
    window.submitDonation = function(encodedItem) {
        const item = JSON.parse(decodeURIComponent(encodedItem));
        const donateQuantity = document.getElementById(`donateQuantity-${item.name.replace(/\s+/g, '-')}`).value;

        // Placeholder for actual donation logic
        console.log(`Donating ${donateQuantity} of ${item.name}`);

        // Simulating a successful donation
        alert(`Donated ${donateQuantity} of ${item.name} successfully!`);
        alert('Donation request submitted');
    };

    // Attach search and filter functions to form submissions
    document.getElementById('categoryForm').addEventListener('submit', searchItems);
    document.getElementById('filterClothesForm').addEventListener('submit', filterClothes);
    document.getElementById('filterSchoolSuppliesForm').addEventListener('submit', filterSchoolSupplies);
    document.getElementById('filterToysForm').addEventListener('submit', filterToys);
    document.getElementById('filterFoodForm').addEventListener('submit', filterFood);
    document.getElementById('filterMedicalSuppliesForm').addEventListener('submit', filterMedicalSupplies);
    document.getElementById('filterBloodDonationsForm').addEventListener('submit', filterBloodDonations);
});
