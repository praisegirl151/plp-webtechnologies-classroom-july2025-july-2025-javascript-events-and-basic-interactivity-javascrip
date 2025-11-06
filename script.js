// === 🌙 DARK MODE TOGGLE ===
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// === 🎮 COUNTER GAME ===
let count = 0;
const countDisplay = document.getElementById("countDisplay");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// === ❓ FAQ TOGGLE ===
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// === 📋 FORM VALIDATION ===
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form reload

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  let valid = true;

  // === Name Validation ===
  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // === Email Validation (Regex) ===
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // === Password Validation ===
  if (passwordInput.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // === Success Message ===
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
