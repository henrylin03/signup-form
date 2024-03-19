const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.noValidate = true;

function validateForm(e) {
  if (form.checkValidity()) {
    return console.log("All form inputs are valid.");
  }

  e.preventDefault();
  Array.from(inputs).forEach((input) => {
    const inputIsValid = input.checkValidity();
    let inputId = input.getAttribute("id");
    let fieldContainer = form.querySelector(`.${inputId}_container`);

    if (inputIsValid) {
      Array.from(fieldContainer.children).forEach((elem) =>
        elem.classList.remove("error")
      );
      return;
    }

    Array.from(fieldContainer.children).forEach((elem) =>
      elem.classList.add("error")
    );
  });
}

form.addEventListener("submit", validateForm);
