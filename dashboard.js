// dashboard.js
const userName = document.getElementById('user-name');
const logoutButton = document.getElementById('logout-button');

// Check if the user is logged in and display their name
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        userName.textContent = user.displayName;
    } else {
        // Redirect to the login page if the user is not authenticated
        window.location.href = 'index.html';
    }
});

// Event listener for logout button
logoutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        // Redirect to the login page after logout
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error(error);
    });
});
