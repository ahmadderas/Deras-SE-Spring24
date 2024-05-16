// updateAccount.js

function updateAccount(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const address = document.getElementById('address').value;
    const area = document.getElementById('area').value;
    const governorate = document.getElementById('governorate').value;

    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Contact Number: ${contactNumber}`);
    console.log(`Address: ${address}`);
    console.log(`Area: ${area}`);
    console.log(`Governorate: ${governorate}`);

    // Placeholder for actual update logic
    alert('Account information updated successfully!');
}

function deleteAccount() {
    // Placeholder for actual deletion logic
    alert('Account deleted successfully!');
}
