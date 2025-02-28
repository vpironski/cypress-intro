// Selecting form and input elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");

    let errorElement = field.closest(".form-group").querySelector(".error-text");

    // Create the error element if it doesn't exist
    if (!errorElement) {
        errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.setAttribute(`data-test-id`, `${field.getAttribute('data-test-id')}-error`);
        field.closest(".form-group").appendChild(errorElement);
    }

    errorElement.innerText = errorText;
    errorElement.style.display = "block";  // ✅ Force visibility
};


// Function to clear errors
const clearErrors = () => {
    document.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(el => el.innerText = "");
};

// Email validation pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Handling form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting

    clearErrors();

    let isValid = true;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
        isValid = false;
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
        isValid = false;
    }

    if (isValid) {
        alert("Login successful! (Replace this with real authentication)");
        loginForm.submit(); // Proceed with form submission
    }
});

// Toggle password visibility
passToggleBtn.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
