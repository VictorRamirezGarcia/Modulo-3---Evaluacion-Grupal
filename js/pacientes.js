document.addEventListener("DOMContentLoaded", function() {
    cargarPacientes();
});


const form = document.getElementById('agregarPacienteForm');
const pacientesContainer = document.getElementById('pacientes-container');
const eliminarPacienteBtn = document.getElementById('eliminarPacienteBtn');
const verPacientesBtn = document.getElementById('verPacientesBtn');

let pacientes = []; // Asegúrate de que 'pacientes' esté inicializado como un array vacío


// Función para mostrar pacientes en la página
function mostrarPacientes(pacientes) {
        pacientesContainer.innerHTML = ''; // Limpiar lista existente
        pacientes.forEach((paciente) => {
            const { rut, nombre, fecha_nacimiento, telefono, direccion, email  } = paciente;
            const pacienteDiv = document.createElement('div');
            pacienteDiv.classList.add('col-md-4');
            pacienteDiv.innerHTML = `
                <div class="paciente-card card">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="paciente-info">RUT: <strong>${rut}</strong></p>
                        <p class="paciente-info">Teléfono: <strong>${telefono}</strong></p>
                        <p class="paciente-info">Dirección: <strong>${direccion}</strong></p>
                        <p class="paciente-info">Email: <strong>${email}</strong></p>
                        <button class="btn btn-danger btn-sm" onclick="eliminarPaciente(${rut})">Eliminar</button>
                    </div>
                </div>
            `;
            pacientesContainer.appendChild(pacienteDiv);
        });
}

// Cargar pacientes desde el archivo JSON
async function cargarPacientes() {
    try {
        const response = await fetch('../data/pacientes.json'); // Ruta al archivo JSON
        const pacientesData = await response.json(); // Parsear JSON
        pacientes = pacientesData;  // Guardar los pacientes cargados en la variable global
        mostrarPacientes(pacientes); // Mostrar los pacientes cargados
    } catch (error) {
        console.error('Error al cargar los pacientes:', error);
        pacientes = []; // Si hay error, asegurarse de que pacientes sea un array vacío
        mostrarPacientes(pacientes); // Mostrar la lista vacía
    }
}

    // Función para eliminar un paciente por su RUT
    function eliminarPaciente(rut) {
        const index = pacientes.findIndex(paciente => paciente.rut === rut);  // Buscar el índice del paciente por RUT
        if (index !== -1) {
            pacientes.splice(index, 1);  // Eliminar paciente del array
            mostrarPacientes(pacientes);  // Volver a mostrar la lista con el paciente eliminado
            alert('Paciente eliminado');
        } else {
            alert('Paciente no encontrado');
        }
    }

// Manejar el formulario de agregar paciente
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;

    const nuevoPaciente = {
        rut,
        nombre,
        fecha_nacimiento,
        telefono,
        direccion,
        email
    };

    pacientes.push(nuevoPaciente); // Usamos 'pacientes' en lugar de 'pacientesJSON'
    mostrarPacientes(pacientes); // Volver a mostrar la lista de pacientes actualizada
});