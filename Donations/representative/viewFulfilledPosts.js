// viewFulfilledPosts.js

document.addEventListener('DOMContentLoaded', function() {
    let donationPosts = [
        {
            category: 'clothes',
            itemName: 'Winter Jacket',
            description: 'Warm jacket for cold weather'
        },
        {
            category: 'toys',
            itemName: 'Toy Car',
            description: 'Remote-controlled toy car'
        }
    ];

    const tbody = document.querySelector('#postsTable tbody');

    function displayPosts() {
        tbody.innerHTML = ''; // Clear the existing rows

        donationPosts.forEach(post => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${post.category}</td>
                <td>${post.itemName}</td>
                <td>${post.description}</td>
                <td>
                    <button onclick="editPost('${post.itemName}')">Edit</button>
                    <button onclick="deletePost('${post.itemName}')">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    window.editPost = function(itemName) {
        const post = donationPosts.find(post => post.itemName === itemName);

        const newCategory = prompt('Enter new category:', post.category);
        if (newCategory === null) return; // If cancel is clicked, return

        const newItemName = prompt('Enter new item name:', post.itemName);
        if (newItemName === null) return; // If cancel is clicked, return

        const newDescription = prompt('Enter new description:', post.description);
        if (newDescription === null) return; // If cancel is clicked, return

        post.category = newCategory;
        post.itemName = newItemName;
        post.description = newDescription;

        alert(`Updated post: ${newItemName}`);
        displayPosts(); // Refresh the table
    }

    window.deletePost = function(itemName) {
        const index = donationPosts.findIndex(post => post.itemName === itemName);
        if (index !== -1) {
            donationPosts.splice(index, 1);
            alert(`Deleted post: ${itemName}`);
            displayPosts(); // Refresh the table
        }
    }

    displayPosts(); // Initial display of posts
});
