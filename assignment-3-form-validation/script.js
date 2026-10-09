const form = document.getElementById("regForm");
const successMsg = document.getElementById("successMsg");

// Show or clear an error under a field
function setError(id, message) {
  const input = document.getElementById(id);
  const errorBox = document.getElementById(id + "Error");
  errorBox.textContent = message;
  input.classList.toggle("invalid", message !== "");
  return message === ""; // true when valid
}

// ----- One validation function per field -----
function validateName() {
  const value = document.getElementById("name").value.trim();
  if (value === "") return setError("name", "Name is required");
  if (value.length < 3) return setError("name", "Name must be at least 3 characters");
  if (!/^[A-Za-z ]+$/.test(value)) return setError("name", "Name can contain only letters and spaces");
  return setError("name", "");
}

function validateEmail() {
  const value = document.getElementById("email").value.trim();
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") return setError("email", "Email is required");
  if (!pattern.test(value)) return setError("email", "Enter a valid email address");
  return setError("email", "");
}

function validatePhone() {
  const value = document.getElementById("phone").value.trim();
  if (value === "") return setError("phone", "Phone number is required");
  if (!/^[6-9]\d{9}$/.test(value)) {
    return setError("phone", "Enter a valid 10-digit number starting with 6-9");
  }
  return setError("phone", "");
}

function validatePassword() {
  const value = document.getElementById("password").value;
  if (value === "") return setError("password", "Password is required");
  if (value.length < 8) return setError("password", "Password must be at least 8 characters");
  if (!/[A-Z]/.test(value)) return setError("password", "Add at least one uppercase letter");
  if (!/[a-z]/.test(value)) return setError("password", "Add at least one lowercase letter");
  if (!/\d/.test(value)) return setError("password", "Add at least one number");
  return setError("password", "");
}

function validateConfirm() {
  const pass = document.getElementById("password").value;
  const value = document.getElementById("confirm").value;
  if (value === "") return setError("confirm", "Please confirm your password");
  if (value !== pass) return setError("confirm", "Passwords do not match");
  return setError("confirm", "");
}

// Validate live while the user leaves a field
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("confirm").addEventListener("blur", validateConfirm);

// Only allow digits in the phone box
document.getElementById("phone").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
});

// Validate everything on submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const allValid = [
    validateName(),
    validateEmail(),
    validatePhone(),
    validatePassword(),
    validateConfirm(),
  ].every(Boolean);

  if (allValid) {
    successMsg.textContent = "Registration successful!";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
