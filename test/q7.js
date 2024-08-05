const sortButton = document.getElementById('sort-button');
const alphabetInput = document.getElementById('alphabet-input');
const resultMessage = document.getElementById('result-message');

sortButton.addEventListener('click', () => {
    const inputString = alphabetInput.value;
    const inputArray = inputString.split(',').map(x => x.trim());
    const sortedArray = inputArray.sort((a, b) => a.localeCompare(b));
    resultMessage.textContent = `The alphabet elements in alphabetical order are: ${sortedArray.join(', ')}`;
});