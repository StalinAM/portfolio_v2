export const validateForm = () => {
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const form = document.getElementById("form");

  const email = document.querySelector("#email");
  const emailSpan = document.querySelector("#email+span");

  const name = document.querySelector("#name");
  const nameSpan = document.querySelector("#name+span");

  const message = document.querySelector("#project");
  const messageSpan = document.querySelector("#project+span");

  const btnSubmit = document.querySelector("#send-email");
  const successSpan = document.querySelector("#success-msj");

  form.addEventListener("submit", handleSubmit);

  email.addEventListener("blur", hideErrorSpan);
  name.addEventListener("blur", hideErrorSpan);
  message.addEventListener("blur", hideErrorSpan);

  email.addEventListener("input", validateEmail);
  name.addEventListener("input", () => validateInput(name, 51, nameSpan));

  message.addEventListener("input", () =>
    validateInput(message, 301, messageSpan)
  );

  function hideErrorSpan() {
    this.nextElementSibling.classList.add("hidden");
  }

  function validateEmail() {
    if (!EMAIL_REGEX.test(email.value)) {
      email.classList.remove("focus:border-js");
      email.classList.add("focus:border-red-500");
      emailSpan.classList.remove("hidden");
    } else {
      email.classList.remove("focus:border-red-500");
      email.classList.add("focus:border-js");
      emailSpan.classList.add("hidden");
    }
    checkFormValidity();
  }

  function validateInput(inputElement, maxLength, errorSpanElement) {
    if (inputElement.value.length > maxLength) {
      inputElement.classList.remove("focus:border-js");
      inputElement.classList.add("focus:border-red-500");
      errorSpanElement.classList.remove("hidden");
    } else {
      inputElement.classList.remove("focus:border-red-500");
      inputElement.classList.add("focus:border-js");
      errorSpanElement.classList.add("hidden");
    }
    checkFormValidity();
  }
  function checkFormValidity() {
    if (email.value && name.value && message.value) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    successSpan.classList.remove("hidden");

    email.value = "";
    name.value = "";
    message.value = "";

    const serviceID = "default_service";
    const templateID = "template_zslq32f";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        setTimeout(() => {
          successSpan.classList.add("hidden");
        }, 1500);
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  }
};
