
// Check if a user is logged in, and redirect to the landing page if true
if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'login.html';
}

// Handle Login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Login successful - set the logged-in flag in localStorage
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Handle Registration
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        alert('User already exists! Please login.');
        return;
    }

    // Save the new user to localStorage
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');

    // Redirect to login page
    window.location.href = 'login.html';
});

// Handle Logout
document.getElementById('logoutBtn')?.addEventListener('click', function () {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
});
