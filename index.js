const toggle = document.getElementById("toggle");
const signup = document.getElementById("open");
const closebtn = document.getElementById("close");
const submitbtn = document.getElementById("submit-btn");
const modal = document.getElementById("modal");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

signup.addEventListener("click", () => modal.classList.add("show-modal"));

closebtn.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);
