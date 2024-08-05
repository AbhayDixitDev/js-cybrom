// Login Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TO DO: Implement login logic here
    console.log(`Login attempted with username: ${username} and password: ${password}`);
});

// Signup Form Submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // TO DO: Implement signup logic here
    console.log(`Signup attempted with username: ${username}, email: ${email}, password: ${password}, and confirm password: ${confirmPassword}`);
});