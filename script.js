const form = document.querySelector("form");
const fields = document.querySelector(".fields");

form.noValidate = true;

function validateForm(e) {
  if (form.checkValidity()) return console.log("All form inputs are valid.");

  e.preventDefault();
  alert("something's wrong");
}

form.addEventListener("submit", validateForm);
