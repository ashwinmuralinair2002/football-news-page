const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");
const errorMessage = document.getElementById("error-msg");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = passwordInput.value;

  if (username === "ashwin007" && password === "007ashwin") {
    localStorage.setItem("isLoggedIn", "true");
    location.replace("index.html");
    return;
  }

  errorMessage.hidden = false;
});

passwordToggle.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  passwordToggle.textContent = isPassword ? "Hide" : "Show";
  passwordToggle.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  passwordToggle.setAttribute("aria-pressed", String(isPassword));
});

loginForm.addEventListener("input", () => {
  errorMessage.hidden = true;
});
