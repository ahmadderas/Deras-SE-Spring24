// viewDonorDetails.js

document.addEventListener('DOMContentLoaded', function() {
    const donorDetails = [
        {
            donorName: 'Emily Brown',
            email: 'emily@example.com',
            contactNumber: '123-456-7890',
            itemDonated: 'Winter Jacket'
        },
        {
            donorName: 'Michael Green',
            email: 'michael@example.com',
            contactNumber: '098-765-4321',
            itemDonated: 'Toy Car'
        }
    ];

    const tbody = document.querySelector('#donorDetailsTable tbody');

    donorDetails.forEach(detail => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${detail.donorName}</td>
            <td>${detail.email}</td>
            <td>${detail.contactNumber}</td>
            <td>${detail.itemDonated}</td>
            <td>
                <button onclick="viewContact('${detail.email}', '${detail.contactNumber}')">View Contact</button>
            </td>
        `;
        tbody.appendChild(row);
    });
});

function viewContact(email, contactNumber) {
    alert(`Contact Details:\nEmail: ${email}\nContact Number: ${contactNumber}`);
}
