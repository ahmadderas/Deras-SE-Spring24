// donorList.js

document.addEventListener('DOMContentLoaded', function() {
    const donorSubmissions = [
        {
            firstName: 'Emily',
            lastName: 'Brown',
            gender: 'Female',
            email: 'emily@example.com',
            contactNumber: '123-456-7890',
            address: '321 Donor St',
            area: 'Northside',
            governorate: 'North',
            role: 'Donor',
            volunteerInterest: 'Teacher',
            status: 'Pending'
        },
        {
            firstName: 'Michael',
            lastName: 'Green',
            gender: 'Male',
            email: 'michael@example.com',
            contactNumber: '098-765-4321',
            address: '654 Charity Ave',
            area: 'Southside',
            governorate: 'South',
            role: 'Donor',
            volunteerInterest: 'Doctor',
            status: 'Pending'
        }
    ];

    const tbody = document.querySelector('#donorTable tbody');

    donorSubmissions.forEach(submission => {
        const encodedSubmission = encodeURIComponent(JSON.stringify(submission));
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${submission.firstName}</td>
            <td>${submission.lastName}</td>
            <td>${submission.gender}</td>
            <td>${submission.email}</td>
            <td>${submission.contactNumber}</td>
            <td>${submission.address}</td>
            <td>${submission.area}</td>
            <td>${submission.governorate}</td>
            <td>${submission.role}</td>
            <td>${submission.volunteerInterest}</td>
            <td id="status-${submission.email.replace(/[@.]/g, '-')}">${submission.status}</td>
            <td>
                <button onclick="downloadSubmission('${encodedSubmission}')">Download</button>
                <button onclick="acceptSubmission('${submission.email.replace(/[@.]/g, '-')}')">Accept</button>
                <button onclick="rejectSubmission('${submission.email.replace(/[@.]/g, '-')}')">Reject</button>
                <button onclick="deleteDonor('${submission.email.replace(/[@.]/g, '-')}')">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
});

function downloadSubmission(encodedSubmission) {
    const submission = JSON.parse(decodeURIComponent(encodedSubmission));
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submission));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${submission.firstName}_${submission.lastName}_submission.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function acceptSubmission(emailId) {
    document.querySelector(`#status-${emailId}`).textContent = 'Accepted';
    alert(`Accepted submission for ${emailId}`);
    // Implement further accept logic if needed
}

function rejectSubmission(emailId) {
    document.querySelector(`#status-${emailId}`).textContent = 'Rejected';
    alert(`Rejected submission for ${emailId}`);
    // Implement further reject logic if needed
}

function deleteDonor(emailId) {
    // Placeholder for actual deletion logic
    console.log(`Deleting donor with email: ${emailId}`);
    alert(`Deleted donor with email: ${emailId}`);
    // Remove the donor's row from the table
    const row = document.querySelector(`#status-${emailId}`).parentElement;
    row.parentElement.removeChild(row);
}
