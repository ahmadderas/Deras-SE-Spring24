// donorRegistration.js

function registerDonor(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const area = document.getElementById('area').value;
    const governorate = document.getElementById('governorate').value;

    // Here you can add the code to send the registration data to the server
    // For now, we'll just log the data to the console
    console.log({
        firstName,
        lastName,
        gender,
        email,
        contactNumber,
        password,
        address,
        area,
        governorate
    });

    alert('Donor registered successfully!');
    window.location.href = 'login.html'; // Redirect to login page after successful registration
}
