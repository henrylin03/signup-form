const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#password_confirm");

form.noValidate = true;

function validatePasswords() {
  const passwordInputContainers = document.querySelectorAll(
    "li[class^='password']"
  );
  if (
    passwordField.value &&
    confirmPasswordField.value &&
    passwordField.value === confirmPasswordField.value
  ) {
    Array.from(passwordInputContainers).forEach((containerElem) => {
      const inputFields = containerElem.children;
      Array.from(inputFields).forEach((field) =>
        field.classList.remove("error")
      );
    });
  } else {
    Array.from(passwordInputContainers).forEach((containerElem) => {
      const inputFields = containerElem.children;
      Array.from(inputFields).forEach((field) => field.classList.add("error"));
    });
  }
}

function validateNonPasswordFields() {
  return;
}

function validateForm(e) {
  if (form.checkValidity()) return;

  e.preventDefault();
  validatePasswords();
}

// function validatePasswordsMatch() {
//   if (passwordField.value && confirmPasswordField.value)
//     return passwordField.value === confirmPasswordField.value;
//   return false;
// }

// function validateForm(e) {
//   if (form.checkValidity()) return;

//   e.preventDefault();
//   Array.from(inputs).forEach((input) => {
//     const inputIsValid = (inputElementId) => {
//       if (inputElementId.includes("password")) validatePasswordsMatch();
//       else inputElementId.checkValidity;
//     };

//     let inputId = input.getAttribute("id");
//     let fieldContainer = form.querySelector(`.${inputId}_container`);

//     if (inputIsValid(inputId)) {
//       Array.from(fieldContainer.children).forEach((elem) =>
//         elem.classList.remove("error")
//       );
//       return;
//     }

//     Array.from(fieldContainer.children).forEach((elem) =>
//       elem.classList.add("error")
//     );
//   });
// }

form.addEventListener("submit", validateForm);
passwordField.addEventListener("input", validatePasswords);
confirmPasswordField.addEventListener("input", validatePasswords);
