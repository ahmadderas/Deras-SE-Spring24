// transportation.js

document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for donation items
    const donationItems = [
        { id: 1, name: 'Winter Jacket' },
        { id: 2, name: 'Math Textbook' },
        { id: 3, name: 'Toy Car' },
        { id: 4, name: 'Canned Beans' },
        { id: 5, name: 'Bandages' }
    ];

    // Function to display list of donation items
    function displayItems() {
        const itemsList = document.getElementById('itemsList');
        itemsList.innerHTML = '';

        donationItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <button onclick="scheduleTransportation(${item.id})">Schedule Transportation</button>
            `;
            itemsList.appendChild(itemDiv);
        });
    }

    // Function to handle scheduling transportation
    window.scheduleTransportation = function(itemId) {
        document.getElementById('transportationFormContainer').style.display = 'block';
        document.getElementById('currentItem').value = itemId;
    }

    // Function to handle transportation form submission
    function handleTransportation(event) {
        event.preventDefault();

        const transportationType = document.getElementById('transportationType').value;
        const pickupTime = document.getElementById('pickupTime').value;
        const dropoffTime = document.getElementById('dropoffTime').value;
        const itemId = document.getElementById('currentItem').value;
        const itemName = donationItems.find(item => item.id == itemId).name;

        console.log(`Item: ${itemName}`);
        console.log(`Transportation Type: ${transportationType}`);
        console.log(`Pickup Time: ${pickupTime}`);
        console.log(`Drop-off Time: ${dropoffTime}`);

        // Placeholder for actual logic to handle transportation details
        alert(`Transportation request submitted for ${itemName}:\nType: ${transportationType}\nPickup Time: ${pickupTime}\nDrop-off Time: ${dropoffTime}`);

        // Simulate ETA and driver arrival notification
        displayETA();
        setTimeout(displayNotification, 5000); // Simulate notification after 5 seconds
    }

    // Function to display estimated time of arrival
    function displayETA() {
        const etaDiv = document.getElementById('eta');
        const etaDetails = document.getElementById('etaDetails');

        etaDetails.textContent = 'The driver will arrive in approximately 30 minutes.';
        etaDiv.style.display = 'block';
    }

    // Function to display driver arrival notification
    function displayNotification() {
        const notificationDiv = document.getElementById('notification');
        notificationDiv.style.display = 'block';
    }

    // Attach the form submission handler
    document.getElementById('transportationForm').addEventListener('submit', handleTransportation);

    // Display the donation items on page load
    displayItems();
});
