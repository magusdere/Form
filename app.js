const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const alertSuccess = document.querySelector("#alertSuccess");

const regUSerName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const successMessage = () => {
    alertSuccess.textContent = "Formulario enviado con éxito";
    alertSuccess.classList.remove("d-none");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d-none");

    const errors = [];

    const errorMessage = () => {
        errors.forEach((item) => {
            item.tipo.classList.remove("d-none");
            item.tipo.textContent = item.msg;
        })
    }
    
    if (!regUSerName.test(inputName.value) || !inputName.value.trim()) {

        inputName.classList.add("is-invalid");

        errors.push({
            tipo: alertName,
            msg: "Formato no válido en el campo nombre, solo letras",
        });
    } else {
        alertName.classList.add("d-none");

        inputName.classList.remove("is-invalid");
        inputName.classList.add("is-valid");
    }

    if (!regUserEmail.test(inputEmail.value) || !inputEmail.value.trim()) {

        inputEmail.classList.add("is-invalid");

        errors.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    } else {
        alertEmail.classList.add("d-none");

        inputEmail.classList.remove("is-invalid");
        inputEmail.classList.add("is-valid");
    }

    if (errors !== 0) {
        errorMessage(errors);
        return;
    };

    successMessage()
    
})