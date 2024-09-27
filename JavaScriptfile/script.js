// Email validation function
function validateEmail(formId) {
    const emailInput = document.getElementById(formId);
    const emailValue = emailInput.value;
    
    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        alert('Invalid email address. Please enter a valid email.');
        return false; // Prevent form submission
    } else {
        alert('Thank you! Your form has been successfully submitted.');
        return true; // Allow form submission
    }
}
