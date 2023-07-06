function validateEmailForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input field and error message element
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate the email address
    if (!emailInput.value.match(emailRegex)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('is-invalid'); // Add Bootstrap's 'is-invalid' class
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('is-invalid'); // Remove Bootstrap's 'is-invalid' class
      // Submit the form or perform any additional actions
      // Here, you can add an AJAX request to submit the form data to the server

      const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', validateEmailForm);
    }
  }