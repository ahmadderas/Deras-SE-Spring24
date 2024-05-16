// selectRole.js

function selectRole(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;

    // Placeholder for actual role selection logic
    // This would typically involve making an API call to your backend
    console.log('Selected Role:', role);

    // Simulating a successful role selection
    alert('Role selected successfully!');
    window.location.href = 'donorDashboard.html';
}
