const form = document.querySelector("form");
const fields = document.querySelector(".fields");

form.noValidate = true;

function validateForm() {
  if (form.checkValidity()) alert("all valid");
  else alert("something's wrong");
}

form.addEventListener("submit", validateForm);
