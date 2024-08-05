const generateBtn = document.getElementById('generate-btn');
const randomNumberElement = document.getElementById('random-number');

generateBtn.addEventListener('click', generateRandomNumber);

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const formattedNumber = String(randomNumber).padStart(6, '0');
    randomNumberElement.textContent = formattedNumber;
}