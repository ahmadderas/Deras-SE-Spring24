// createDonationPost.js

function createDonationPost(event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;

    console.log(`Category: ${category}`);
    console.log(`Item Name: ${itemName}`);
    console.log(`Description: ${description}`);

    // Placeholder for actual creation logic
    alert(`Donation post created:\nCategory: ${category}\nItem Name: ${itemName}\nDescription: ${description}`);

    // Reset the form
    document.getElementById('createPostForm').reset();
}
