function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const firstNameHelp = document.getElementById("firstNameHelp");
    if (firstName.length < 3) {
        firstNameHelp.innerHTML = "El nombre es requerido.";
        return false;
    } else {
        firstNameHelp.innerHTML = "";
    }

    const lastName = document.getElementById("lastName").value;
    const lastNameHelp = document.getElementById("lastNameHelp");
    if (lastName.length < 3) {
        lastNameHelp.innerHTML = "El apellido es requerido.";
        return false;
    } else {
        lastNameHelp.innerHTML = "";
    }

    const email = document.getElementById("email").value;
    const emailHelp = document.getElementById("emailHelp");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailHelp.innerHTML = "Ingrese un correo electrónico válido.";
        return false;
    } else {
        emailHelp.innerHTML = "";
    }

    const phone = document.getElementById("phone").value;
    const phoneHelp = document.getElementById("phoneHelp");
    const phonePattern = /^\d{9}$/;
    if (!phonePattern.test(phone)) {
        phoneHelp.innerHTML = "El número de teléfono debe tener 9 dígitos.";
        return false;
    } else {
        phoneHelp.innerHTML = "";
    }

    const password = document.getElementById("password").value;
    const passwordHelp = document.getElementById("passwordHelp");
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordHelp.innerHTML = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula y un número.";
        return false;
    } else {
        passwordHelp.innerHTML = "";
    }

    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordHelp = document.getElementById("confirmPasswordHelp");
    if (password !== confirmPassword) {
        confirmPasswordHelp.innerHTML = "Las contraseñas no coinciden.";
        return false;
    } else {
        confirmPasswordHelp.innerHTML = "";
    }
    return true;
}