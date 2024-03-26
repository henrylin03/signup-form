const form = document.querySelector("form");
const passwordFields = form.querySelectorAll("input[id^='password']");
const nonPasswordFields = form.querySelectorAll("input:not([id^='password'])");
const createAccountButton = document.querySelector("button");

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

function validateNonPasswordField(field) {
  const inputId = field.getAttribute("id");
  const containerOfInput = form.querySelector(`.${inputId}_container`);
  const childrenOfContainerArray = Array.from(containerOfInput.children);

  if (field.checkValidity()) {
    childrenOfContainerArray.forEach((child) =>
      child.classList.remove("error")
    );
  } else {
    childrenOfContainerArray.forEach((child) => child.classList.add("error"));
  }
}

function validateAndSubmitForm(e) {
  if (form.checkValidity()) form.submit();

  e.preventDefault();
  validatePasswords();
  nonPasswordFields.forEach((f) => validateNonPasswordField(f));
}

createAccountButton.addEventListener("click", validateAndSubmitForm);
passwordFields.forEach((f) => f.addEventListener("input", validatePasswords));
nonPasswordFields.forEach((f) =>
  f.addEventListener("blur", () => validateNonPasswordField(f))
);
