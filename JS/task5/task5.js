function validateForm() {
    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let message = document.getElementById("message");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let websiteError = document.getElementById("websiteError");
    let messageError = document.getElementById("messageError");

    
    nameError.innerText = "";
    emailError.innerText = "";
    websiteError.innerText = "";
    messageError.innerText = "";

    name.classList.remove("error-border");
    email.classList.remove("error-border");
    website.classList.remove("error-border");
    message.classList.remove("error-border");

    
    if (name.value.trim() === "") {
        nameError.innerText = "This field is required";
        name.classList.add("error-border");
        isValid = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
        emailError.innerText = "A valid email address is required";
        email.classList.add("error-border");
        isValid = false;
    }

    if (website.value.trim() === "" || !website.value.startsWith("http")) {
        websiteError.innerText = "A valid URL is required";
        website.classList.add("error-border");
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.innerText = "This field is required";
        message.classList.add("error-border");
        isValid = false;
    }

    return isValid;
}
