// Open the registration modal
function openModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

// Close the registration modal
function closeModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Validate the contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('All fields are required.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    // Submit the form or send data via AJAX
    return true;
}

// Validate the registration form
function registerForm(event) {
    event.preventDefault(); // Prevent form submission
    const regName = document.getElementById('reg-name').value.trim();
    const regEmail = document.getElementById('reg-email').value.trim();

    if (!regName || !regEmail) {
        alert('All fields are required.');
        return false;
    }

    if (!isValidEmail(regEmail)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Registration successful!');
    // Submit the form or send data via AJAX
    return true;
}

// Helper function to validate email addresses
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Optional: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
