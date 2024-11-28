
console.log("2. Programación Orientada a Eventos y Programación Asíncrona (2.5 puntos)\n- Captura eventos del usuario en la página de Contacto:\n- Implementa un listener para capturar el envío del formulario y muestra un mensaje de confirmación.\n- Dispara un evento personalizado que simule la llegada de un nuevo paciente,mostrando una notificación en la página.\n- Implementa una función async/await para simular una llamada a una API REST que obtenga los datos de los doctores. Usa Promise para manejar los casos de éxito o fallo.\n- Implementa el manejo de errores utilizando try/catch en las funciones asíncronas, y define un callback que se invoque al fallar una petición simulada.\n\n");
// 1. Captura de eventos del usuario
document.querySelector("#contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const telefono = document.querySelector("#telefono").value;
    
    if (nombre && correo && telefono) {
    alert("Formulario enviado correctamente. ¡Gracias por contactarnos!");
    } else {
    alert("Por favor, complete todos los campos.");
    }
});
  // 2. Disparar un evento personalizado para simular la llegada de un nuevo paciente
const eventoNuevoPaciente = new CustomEvent('nuevoPaciente', {
    detail: { mensaje: "Nuevo paciente llegó al hospital" }
});

// Listener para mostrar notificación
document.addEventListener('nuevoPaciente', (event) => {
    const notificacion = document.createElement("div");
    notificacion.classList.add("alert", "alert-info");
    notificacion.textContent = event.detail.mensaje;
    
    // Mostrar la notificación en la página
    document.body.prepend(notificacion);
    
    // Desaparecer la notificación después de 5 segundos
    setTimeout(() => notificacion.remove(), 5000);
});
  // Disparar el evento al cargar la página (simula la llegada de un paciente)
document.dispatchEvent(eventoNuevoPaciente);
  // 3. Función async/await para simular una llamada a una API REST
const obtenerDatosDoctores = async () => {
    try {
      const respuesta = await fetch('../data/doctores2.json'); // Simulando la API con un endpoint ficticio
    if (!respuesta.ok) throw new Error('No se pudo obtener los datos');
    const datos = await respuesta.json();
      console.log(datos); // Aquí deberías obtener datos de doctores desde la API
    } catch (error) {
    console.error('Error al obtener los datos', error);
    alert('Hubo un error al obtener los datos de los doctores.');
    }
};
  // Llamada a la función para simular la obtención de datos de la API
obtenerDatosDoctores();
  // 4. Manejo de errores utilizando try/catch en la llamada a la API
const obtenerDatos = async () => {
    try {
      const respuesta = await fetch('../data/doctores2.json'); // Simulando la API
    if (!respuesta.ok) throw new Error('No se pudo obtener los datos');
    const datos = await respuesta.json();
    console.log(datos);
    } catch (error) {
    console.log('Error:', error.message);
    mostrarError(error.message);
    }
};
  // Función para mostrar el error
const mostrarError = (mensaje) => {
    alert(`Error: ${mensaje}`);
};
  // Simulando una llamada con error (para pruebas)
obtenerDatos();