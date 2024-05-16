// organizationRegistration.js

function registerOrganization(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const organizationName = document.getElementById('organizationName').value;
    const organizationType = document.getElementById('organizationType').value;
    const organizationAddress = document.getElementById('organizationAddress').value;
    const area = document.getElementById('area').value;
    const governorate = document.getElementById('governorate').value;

    // Here you can add the code to send the registration data to the server
    // For now, we'll just log the data to the console
    console.log({
        firstName,
        lastName,
        gender,
        email,
        password,
        contactNumber,
        organizationName,
        organizationType,
        organizationAddress,
        area,
        governorate
    });

    alert('Organization registered successfully!');
    window.location.href = 'login.html'; // Redirect to login page after successful registration
}
