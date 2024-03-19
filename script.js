const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.noValidate = true;

function validateForm(e) {
  if (form.checkValidity()) {
    return console.log("All form inputs are valid.");
  }

  e.preventDefault();
  Array.from(inputs).forEach((i) => {
    if (i.checkValidity()) {
      i.classList.remove("error");
      if (i.nextElementSibling) i.nextElementSibling.classList.remove("error");
      return;
    }

    i.classList.add("error");
    if (i.nextElementSibling) i.nextElementSibling.classList.add("error");
  });
}

form.addEventListener("submit", validateForm);
