const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Reset messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    // Name Validation
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email.';
        isValid = false;
    }

    // Message Validation
    if (message === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    // If valid, show success message
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});
