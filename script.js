const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Thank you! Your message has been received.";
    form.reset();
  }
});