const calculateButton = document.getElementById('calculate-button');
const arrayInput = document.getElementById('array-input');
const resultMessage = document.getElementById('result-message');

calculateButton.addEventListener('click', () => {
    const inputString = arrayInput.value;
    const inputArray = inputString.split(',').map(x => parseFloat(x.trim()));
    const sum = inputArray.reduce((acc, val) => acc + val, 0);
    resultMessage.textContent = `The sum of the array elements is: ${sum}`;
});