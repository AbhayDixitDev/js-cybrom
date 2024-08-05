const loaderContainer = document.querySelector('.loader-container');
const welcomeContainer = document.querySelector('.welcome-container');

// Simulate loading time
setTimeout(() => {
    loaderContainer.style.display = 'none';
    welcomeContainer.style.display = 'flex';
}, 3000);