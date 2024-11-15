/* Mensaje */
function cerrarMensaje() {
    document.getElementById('mensaje').style.display = 'none';
}
/* other */
function showMap(event, sucursal) {
    event.preventDefault();

    const mapIframe = document.getElementById('mapFrame'); // Asegúrate de que este ID coincida con tu HTML
    const mapContainer = document.getElementById('mapIframe'); // Este es el contenedor del iframe

    // Configura el src del iframe según la sucursal seleccionada
    switch (sucursal) {
        case 'vina':
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107069.90456856768!2d-71.61265780202785!3d-33.005501831569994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689de84ead41255%3A0x8e5fde76df3d413f!2zVmnDsWEgZGVsIE1hciwgVmFscGFyYcOtc28!5e0!3m2!1ses!2scl!4v1728874969465!5m2!1ses!2scl";
            break;
        case 'curico':
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52304.417582442555!2d-71.26898844992765!3d-34.98101099189965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966519c706a5d7d3%3A0xd0866d47d2259f4!2zQ3VyaWPDsywgTWF1bGU!5e0!3m2!1ses!2scl!4v1728874929169!5m2!1ses!2scl";
            break;
        case 'talca':
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52018.58370736493!2d-71.69505789345872!3d-35.426029603321076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a2ac07d07d%3A0x265657feafdac8b8!2sTalca%2C%20Maule!5e0!3m2!1ses!2scl!4v1728874904040!5m2!1ses!2scl";
            break;
        case 'conce':
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102197.99195276252!2d-73.1154476288101!3d-36.82601367044635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5cdd2bbc63b%3A0x44cb37b752212698!2zQ29uY2VwY2nDs24sIELDrW8gQsOtbw!5e0!3m2!1ses!2scl!4v1728874496152";
            break;
        case 'losangeles':
            mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50668.271418177945!2d-72.3936894629047!3d-37.46622374820225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966bdd4669523657%3A0x8318f6229d680877!2zTG9zIEFuZ2VsZXMsIExvcyDDgW5nZWxlcywgQsOtbyBCw61v!5e0!3m2!1ses!2scl!4v1728874848313!5m2!1ses!2scl";
            break;
        default:
            mapIframe.src = "";
            break;
    }

    // Asegúrate de mostrar el contenedor del iframe si está oculto
    mapContainer.style.display = 'block';

    // Confirmación en la consola
    console.log("Función showMap ejecutada para:", sucursal);
}


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Mostrar el menú al pasar el mouse
    dropdownButton.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    // Ocultar el menú al salir el mouse
   // dropdownButton.addEventListener('mouseleave', function() {
     //   dropdownMenu.style.display = 'none';
    //});

    // Ocultar el menú si el mouse sale del menú
    dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
    });
});


//form - mod

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