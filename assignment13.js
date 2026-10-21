const form = document.getElementById("contactForm");
const formError = document.getElementById("formError");
const success = document.getElementById("success");


const fields = [
  {
    id: "firstName",
    pattern: /^[A-Za-z][A-Za-z' -]{1,}$/,
    message: "First name must be at least 2 letters."
  },
  {
    id: "surname",
    pattern: /^[A-Za-z][A-Za-z' -]{1,}$/,
    message: "Surname must be at least 2 letters."
  },
  {
    id: "email",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: "Enter a valid email, e.g. name@example.com."
  },
  {
    id: "phone",
    pattern: /^\+?[0-9]{10,14}$/,
    message: "Enter 10–14 digits (an optional + at the start, no spaces)."
  },
  {
    id: "message",
    pattern: /^[\s\S]{10,}$/,
    message: "Your message must be at least 10 characters."
  }
];


function validateField(field) {
  const input = document.getElementById(field.id);
  const error = document.getElementById(field.id + "Error");
  const value = input.value.trim();

  let errorText = "";
  if (value === "") {
    errorText = "This field is required.";
  } else if (!field.pattern.test(value)) {
    errorText = field.message;
  }

  if (errorText) {
    input.classList.add("invalid");
    error.textContent = errorText;
    error.classList.add("show");
    return false;
  }

  input.classList.remove("invalid");
  error.textContent = "";
  error.classList.remove("show");
  return true;
}


function updateFormError() {
  if (!form.querySelector(".invalid")) {
    formError.classList.remove("show");
  }
}

fields.forEach((field) => {
  const input = document.getElementById(field.id);

  input.addEventListener("input", () => {
    validateField(field);
    updateFormError();
  });

  input.addEventListener("blur", () => {
    validateField(field);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  success.classList.remove("show");

  const results = fields.map(validateField);
  const allValid = results.every((ok) => ok);

  if (!allValid) {
    formError.classList.add("show");
    return;
  }

  formError.classList.remove("show");
  success.classList.add("show");
  form.reset();
});