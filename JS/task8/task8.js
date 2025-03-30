document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let isValid = true;
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let age = document.getElementById("age").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let declaration = document.getElementById("declaration").checked;

    // Validation
    if (firstName === "") isValid = false;
    if (lastName === "") isValid = false;
    if (email === "" || !email.includes("@")) isValid = false;
    if (password.length < 6) isValid = false;
    if (confirmPassword !== password) isValid = false;
    if (age === "" || age < 1) isValid = false;
    if (phone === "" || phone.length !== 10) isValid = false;
    if (address === "") isValid = false;
    if (state === "") isValid = false;
    if (country === "") isValid = false;
    if (!declaration) isValid = false;

    if (isValid) {
        alert("Registration successful!");
    } else {
        alert("Please fill out all fields correctly.");
    }
});
