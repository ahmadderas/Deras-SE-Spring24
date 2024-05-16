// changePassword.js

function changePassword(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;

    if (newPassword !== confirmNewPassword) {
        alert('New password and confirm new password do not match.');
        return;
    }

    // Placeholder for actual password change logic
    // This would typically involve making an API call to your backend
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);

    // Simulating a successful password change
    alert('Password changed successfully!');
    window.location.href = 'adminDashboard.html';
}
