// script.js
function generateRandomNumber() {
    const min = 1; // Minimum value (inclusive)
    const max = 100; // Maximum value (inclusive)

    // Generate a random integer between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Update the displayed value
    document.getElementById('randomNumber').textContent = randomNumber;
}




