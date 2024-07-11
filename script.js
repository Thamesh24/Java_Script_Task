// Task 1: Reverse String
const reverseString = (str) => str.split('').reverse().join('');

document.getElementById('reverseButton').addEventListener('click', () => {
    const inputString = document.getElementById('stringInput').value;
    const reversedString = reverseString(inputString);
    document.getElementById('reverseOutput').textContent = reversedString;
});

// Task 2: Change Content and Style
document.getElementById('changeContentButton').addEventListener('click', () => {
    const newContent = document.getElementById('contentInput').value;
    const textColor = document.getElementById('colorInput').value;
    const contentOutput = document.getElementById('contentOutput');

    contentOutput.textContent = newContent;
    contentOutput.style.color = textColor;
});

// Task 3: Event Listener
document.getElementById('eventButton').addEventListener('click', () => {
    document.getElementById('eventOutput').textContent = 'Text has been changed!';
});

// Task 4: Form Validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessages.textContent = '';

    if (nameInput.value === '') {
        errorMessages.textContent += 'Name is required. ';
    }

    if (emailInput.value === '') {
        errorMessages.textContent += 'Email is required. ';
    } else if (!emailInput.value.includes('@')) {
        errorMessages.textContent += 'Email is invalid. ';
    }
});
