// // for register page for local storage
// function registerUser() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if (username && password) {
//         let users = JSON.parse(localStorage.getItem('users')) || [];
//         const exists = users.find(user => user.username === username);
//         if (exists) {
//             alert('Username already exists. Please choose a different username.');
//             return;
//         }else{
//             users.push({ username, password });
//             localStorage.setItem('users', JSON.stringify(users));   
//             alert('Registration successful! You can now log in.');
//             window.location.href = 'login.html'; // Redirect to login page
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// }

// //for login page for local storage
// function checkUsernamePassword() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     if (username && password) {
//         let users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find(user => user.username === username && user.password === password);
//         if (user) {
//             alert('Login successful!');
//             window.location.href = 'welcome.html'; // Redirect to welcome page
//         } else {
//             alert('Invalid username or password. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// }   



// for login page for direct assignment user name and password
function checkUsernamePassword(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Get users from localStorage or use default users if none exist
    let users = JSON.parse(localStorage.getItem('users')) || [
        { username: 'Admin', password: 'Admin@123' },
        { username: 'Durga', password: 'Durga@123' },
        { username: 'Bhawani', password: 'Bhawani@123' }
    ];

    const matched = users.find(
        user => user.username === username && user.password === password
    );
    if (matched) {
        localStorage.setItem('loggedInUser', username); // Store logged-in user
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to welcome page
    } else {
        alert('Invalid username or password. Please try again.');
        // No redirect, let user try again
    }
}

// for register page for direct assignment user name and password
function registerUser(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username && password) {
        // Get users from localStorage or use default users if none exist
        let users = JSON.parse(localStorage.getItem('users')) || [
            { username: 'Admin', password: 'Admin@123' },
            { username: 'Durga', password: 'Durga@123' },
            { username: 'Bhawani', password: 'Bhawani@123' }
        ];

        const exists = users.find(user => user.username === username);
        if (exists) {
            alert('Username already exists. Please choose a different username.');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful! You can now log in.');
            window.location.href = 'login.html'; // Redirect to login page
        }
    } else {
        alert('Please fill in all fields.');
    }
}

// logout function for todo page
function logout() {
    localStorage.removeItem('loggedInUser'); // Clear logged-in user
    alert('You have been logged out .');
    window.location.href = 'login.html'; // Redirect to login page
}