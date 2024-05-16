// organizationList.js

document.addEventListener('DOMContentLoaded', function() {
    const organizationSubmissions = [
        {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'Male',
            email: 'john@example.com',
            contactNumber: '123-456-7890',
            organizationName: 'Helping Hands',
            organizationType: 'Non-profit',
            organizationAddress: '123 Charity St',
            area: 'Downtown',
            governorate: 'Central',
            status: 'Pending'
        },
        {
            firstName: 'Jane',
            lastName: 'Smith',
            gender: 'Female',
            email: 'jane@example.com',
            contactNumber: '098-765-4321',
            organizationName: 'Educate All',
            organizationType: 'School',
            organizationAddress: '456 Learning Ln',
            area: 'Uptown',
            governorate: 'North',
            status: 'Pending'
        }
    ];

    const tbody = document.querySelector('#organizationTable tbody');

    organizationSubmissions.forEach(submission => {
        const encodedSubmission = encodeURIComponent(JSON.stringify(submission));
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${submission.firstName}</td>
            <td>${submission.lastName}</td>
            <td>${submission.gender}</td>
            <td>${submission.email}</td>
            <td>${submission.contactNumber}</td>
            <td>${submission.organizationName}</td>
            <td>${submission.organizationType}</td>
            <td>${submission.organizationAddress}</td>
            <td>${submission.area}</td>
            <td>${submission.governorate}</td>
            <td id="status-${submission.email.replace(/[@.]/g, '-')}">${submission.status}</td>
            <td>
                <button onclick="downloadSubmission('${encodedSubmission}')">Download</button>
                <button onclick="acceptSubmission('${submission.email.replace(/[@.]/g, '-')}')">Accept</button>
                <button onclick="rejectSubmission('${submission.email.replace(/[@.]/g, '-')}')">Reject</button>
                <button onclick="deleteOrganization('${submission.email.replace(/[@.]/g, '-')}')">Delete</button>
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

function deleteOrganization(emailId) {
    // Placeholder for actual deletion logic
    console.log(`Deleting organization with email: ${emailId}`);
    alert(`Deleted organization with email: ${emailId}`);
    // Remove the organization's row from the table
    const row = document.querySelector(`#status-${emailId}`).parentElement;
    row.parentElement.removeChild(row);
}
