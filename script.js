const form = document.querySelector("form");
const passwordFields = form.querySelectorAll("input[id^='password']");

form.noValidate = true;

function validatePasswords() {
  const passwordInputContainers = document.querySelectorAll(
    "li[class^='password']"
  );
  if (
    passwordFields[0].value &&
    passwordFields[1].value &&
    passwordFields[0].value === passwordFields[1].value
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

// function validateNonPasswordFields() {
//   const nonPasswordContainers = form.querySelectorAll(
//     "li:not([class^='password'])"
//   );
//   Array.from(nonPasswordContainers).forEach((containerElem) => {
//     const inputElement = containerElem.querySelector("input");
//     if (inputElement.checkValidity()) {
//       Array.from(containerElem.children).forEach((field) =>
//         field.classList.remove("error")
//       );
//     } else {
//       Array.from(containerElem.children).forEach((field) =>
//         field.classList.add("error")
//       );
//     }
//   });

//   return;
// }

function validateForm(e) {
  if (form.checkValidity()) return;

  e.preventDefault();
  validatePasswords();
  // validateNonPasswordFields();
}

form.addEventListener("submit", validateForm);
passwordFields.forEach((f) => f.addEventListener("input", validatePasswords));
