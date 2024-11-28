document.getElementById("cita-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

try {
    let nombre;
    // Pedir el correo electrónico hasta que sea válido (contenga un "@")
    while (true) {
        nombre = prompt("Por favor, ingresa tu nombre completo del Paciente:");

        if (nombre === "") {
            alert("El nombre es obligatorio.");
            continue;
        } else {
            break; // Salir del ciclo si el email es válido
        }
    }



    let email;
    // Pedir el correo electrónico hasta que sea válido (contenga un "@")
    while (true) {
        email = prompt("Por favor, ingresa tu correo electrónico de contacto del paciente:");

        if (email === "") {
            alert("El correo electrónico es obligatorio.");
            continue;
        }if (email.indexOf("@") === -1) {
            alert("El correo electrónico debe contener un '@'.");
            continue;
        } else {
            break; // Salir del ciclo si el email es válido
        }
    }
    let telefono;
    // Pedir el correo electrónico hasta que sea válido (contenga un "@")
    while (true) {
        telefono = prompt("Por favor, ingresa tu teléfono:");

        if (telefono === "") {
            alert("El teléfono es obligatorio.");
            continue;
        } else {
            break; // Salir del ciclo si el email es válido
        }
    }

    // Expresión regular para validar la fecha (YYYY-MM-DD)
    const fechaexpresion = /^\d{4}-\d{2}-\d{2}$/;
    let fecha;
    // Pedir el correo electrónico hasta que sea válido (contenga un "@")
    while (true) {
        fecha = prompt("Por favor, ingresa la fecha de la cita (formato: YYYY-MM-DD): ");

        if (fecha === "") {
            alert("La fecha es obligatoria.");
            continue;
        }if (fechaexpresion.test(fecha) === false) {
            alert("La fecha debe tener el formato YYYY-MM-DD.");
            continue;
        } else {
            break; // Salir del ciclo si el email es válido
        }
    }

    // Expresión regular para validar la hora (HH:MM)
    const horaexpresion = /^\d{2}:\d{2}$/;
    let hora;
    // Pedir el correo electrónico hasta que sea válido (contenga un "@")
    while (true) {
        hora = prompt("Por favor, ingresa la hora de la cita (formato: HH:MM): ");

        if (hora === "") {
            alert("La hora es obligatoria.");
        }if (horaexpresion.test(hora) === false) {
            alert("La fecha debe tener el formato YYYY-MM-DD.");
            continue;
        } else {
            break; // Salir del ciclo si el email es válido
        }
    }

    // Mostrar los datos en consola
    console.log("Nombre: " + nombre);
    console.log("Correo: " + email);
    console.log("Teléfono: " + telefono);
    console.log("Fecha: " + fecha);
    console.log("Hora: " + hora);
    console.log("Se ha agendado correctamente la cita con los siguientes Datos ingresados:\nNombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono + "\nFecha: " + fecha + "\nHora: " + hora);

    // Mostrar los datos en una alerta
    alert("Se ha agendado correctamente la cita con los siguientes Datos ingresados:\nNombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono + "\nFecha: " + fecha + "\nHora: " + hora);

} catch (error) {
    console.error("Ha ocurrido un error: ", error);
    alert("Se ha producido un error al intentar agendar la cita. Por favor, inténtalo nuevamente.");
}
});
