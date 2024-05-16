// login.js

function login(event) {
    event.preventDefault();  // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;  // Assuming you have a select element for role selection

    console.log(`Username: ${username}, Password: ${password}, Role: ${role}`);

    // Check role and validate credentials accordingly
    if (role === 'admin') {
        if (username === 'admin' && password === 'admin123') {
            console.log('Redirecting to admin dashboard');
            window.location.href = '../admin/adminDashboard.html';
        } else {
            alert('Invalid admin credentials.');
        }
    } else if (role === 'donor') {
        // Add donor credentials validation logic here
        if (username === 'donor1' && password === 'donor123') {
            console.log('Redirecting to donor dashboard');
            window.location.href = '../donor/donorDashboard.html';
        } else {
            alert('Invalid donor credentials.');
        }
    } else if (role === 'representative') {
        // Add organization representative credentials validation logic here
        if (username === 'rep1' && password === 'rep123') {
            console.log('Redirecting to representative dashboard');
            window.location.href = '../representative/representativeDashboard.html';
        } else {
            alert('Invalid representative credentials.');
        }
    } else {
        alert('Please select a role.');
    }
}
