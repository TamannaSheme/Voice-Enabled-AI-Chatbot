document.addEventListener("DOMContentLoaded", () => {
  const password = document.querySelector("#password");
  const toggle = document.querySelector("#togglePassword");
  const saveBtn = document.querySelector("#save-btn");
  const logoutBtn = document.querySelector("#logout-btn");
  const backLink = document.querySelector(".back-link a");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isHidden = password.type === "password";
      password.type = isHidden ? "text" : "password";
      toggle.classList.toggle("fa-eye");
      toggle.classList.toggle("fa-eye-slash");
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      alert("Account settings saved successfully!");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "settings.html";
    });
  }
});
