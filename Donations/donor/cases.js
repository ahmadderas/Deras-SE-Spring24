// cases.js

document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for cases
    const cases = [
        // Teaching cases
        {
            type: 'teaching',
            subject: 'Mathematics',
            area: 'Northside',
            governorate: 'North',
            numberOfStudents: 30,
            address: '123 Education St',
            mapMarker: 'https://maps.google.com/?q=123+Education+St',
            description: 'Grade 10 Math tutoring needed.'
        },
        {
            type: 'teaching',
            subject: 'Science',
            area: 'Southside',
            governorate: 'South',
            numberOfStudents: 25,
            address: '456 Knowledge Ave',
            mapMarker: 'https://maps.google.com/?q=456+Knowledge+Ave',
            description: 'Grade 8 Science tutoring needed.'
        },
        // Medical cases
        {
            type: 'medical',
            specialty: 'Cardiology',
            organizationName: 'City Hospital',
            area: 'Downtown',
            governorate: 'Central',
            patientName: 'John Doe',
            age: 45,
            gender: 'Male',
            weight: 85,
            address: '789 Health Blvd',
            mapMarker: 'https://maps.google.com/?q=789+Health+Blvd',
            caseDescription: 'Patient requires regular cardiac check-ups.'
        },
        {
            type: 'medical',
            specialty: 'Pediatrics',
            organizationName: 'Children\'s Clinic',
            area: 'Uptown',
            governorate: 'West',
            patientName: 'Jane Doe',
            age: 6,
            gender: 'Female',
            weight: 20,
            address: '101 Care Rd',
            mapMarker: 'https://maps.google.com/?q=101+Care+Rd',
            caseDescription: 'Regular pediatric check-ups needed.'
        }
    ];

    // Display all cases on initial load
    displayResults(cases);

    // Function to search cases by type
    function searchCases(event) {
        event.preventDefault();

        const caseType = document.getElementById('caseType').value;

        // Show appropriate filter form based on selected case type
        document.getElementById('teachingFilterForm').style.display = (caseType === 'teaching') ? 'block' : 'none';
        document.getElementById('medicalFilterForm').style.display = (caseType === 'medical') ? 'block' : 'none';

        // Filter cases based on selected case type
        const filteredCases = caseType === 'all' ? cases : cases.filter(c => c.type === caseType);

        displayResults(filteredCases);
    }

    // Function to filter teaching cases
    function filterTeachingCases(event) {
        event.preventDefault();

        const subject = document.getElementById('subject').value.toLowerCase();
        const area = document.getElementById('teachingArea').value.toLowerCase();
        const governorate = document.getElementById('teachingGovernorate').value.toLowerCase();

        // Filter cases based on selected criteria
        const filteredCases = cases.filter(c => {
            return c.type === 'teaching' &&
                   (subject === '' || c.subject.toLowerCase().includes(subject)) &&
                   (area === '' || c.area.toLowerCase().includes(area)) &&
                   (governorate === '' || c.governorate.toLowerCase().includes(governorate));
        });

        displayResults(filteredCases);
    }

    // Function to filter medical cases
    function filterMedicalCases(event) {
        event.preventDefault();

        const specialty = document.getElementById('specialty').value.toLowerCase();
        const organizationName = document.getElementById('organizationName').value.toLowerCase();
        const area = document.getElementById('medicalArea').value.toLowerCase();
        const governorate = document.getElementById('medicalGovernorate').value.toLowerCase();

        // Filter cases based on selected criteria
        const filteredCases = cases.filter(c => {
            return c.type === 'medical' &&
                   (specialty === '' || c.specialty.toLowerCase().includes(specialty)) &&
                   (organizationName === '' || c.organizationName.toLowerCase().includes(organizationName)) &&
                   (area === '' || c.area.toLowerCase().includes(area)) &&
                   (governorate === '' || c.governorate.toLowerCase().includes(governorate));
        });

        displayResults(filteredCases);
    }

    // Function to display results
    function displayResults(cases) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';

        if (cases.length === 0) {
            resultsDiv.innerHTML = '<p>No cases found.</p>';
            return;
        }

        cases.forEach(c => {
            const caseDiv = document.createElement('div');
            caseDiv.className = 'result-case';
            caseDiv.innerHTML = `
                <h3>${c.type === 'teaching' ? 'Teaching Case' : 'Medical Case'}</h3>
                <p>${c.description || c.caseDescription}</p>
                ${c.subject ? `<p>Subject: ${c.subject}</p>` : ''}
                ${c.specialty ? `<p>Specialty: ${c.specialty}</p>` : ''}
                ${c.organizationName ? `<p>Organization: ${c.organizationName}</p>` : ''}
                ${c.area ? `<p>Area: ${c.area}</p>` : ''}
                ${c.governorate ? `<p>Governorate: ${c.governorate}</p>` : ''}
                ${c.numberOfStudents ? `<p>Number of Students: ${c.numberOfStudents}</p>` : ''}
                ${c.patientName ? `<p>Patient: ${c.patientName}</p>` : ''}
                ${c.age ? `<p>Age: ${c.age}</p>` : ''}
                ${c.gender ? `<p>Gender: ${c.gender}</p>` : ''}
                ${c.weight ? `<p>Weight: ${c.weight}</p>` : ''}
                ${c.address ? `<p>Address: ${c.address}</p>` : ''}
                ${c.mapMarker ? `<p><a href="${c.mapMarker}" target="_blank">View on Map</a></p>` : ''}
                <button class="fulfill-button" onclick="fulfillCase('${encodeURIComponent(JSON.stringify(c))}')">Fulfill</button>
            `;
            resultsDiv.appendChild(caseDiv);
        });
    }

    // Function to handle fulfilling a case
    window.fulfillCase = function(encodedCase) {
        const c = JSON.parse(decodeURIComponent(encodedCase));

        // Placeholder for actual fulfillment logic
        console.log(`Fulfilling case: ${c.description || c.caseDescription}`);

        // Simulating a successful fulfillment
        alert(`Fulfilled case: ${c.description || c.caseDescription} successfully!`);
        alert('Case fulfillment request submitted');
    };

    // Attach search and filter functions to form submissions
    document.getElementById('caseTypeForm').addEventListener('submit', searchCases);
    document.getElementById('filterTeachingForm').addEventListener('submit', filterTeachingCases);
    document.getElementById('filterMedicalForm').addEventListener('submit', filterMedicalCases);
});
