document.getElementById("contact-form").addEventListener("submit", function(event) {

const formulario = document.getElementById("contact-form");

const nombre = formulario.querySelector("#nombre").value;
const email  = formulario.querySelector("#correo").value;
const telefono  = formulario.querySelector("#telefono").value;

// Mostrar los datos en consola
console.log("Nombre: " + nombre);
console.log("Correo: " + email);
console.log("Teléfono: " + telefono);
console.log("Se ha enviado exitosamente su Fomulario de Contacto. \nCon los siguientes Datos ingresados:\nNombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono);

alert("Se ha enviado exitosamente su Fomulario de Contacto. \nCon los siguientes Datos ingresados:\nNombre: " + nombre + "\nCorreo: " + email + "\nTeléfono: " + telefono);

});