document.addEventListener("DOMContentLoaded", function() {
    cargarDoctores();
});

const form = document.getElementById('agregarDoctorForm');  // Formulario para agregar un doctor
const doctoresContainer = document.getElementById('doctores-container');  // Contenedor de doctores
//let doctores = [];  // Asegúrate de que 'doctores' esté inicializado como un array vacío
let doctores = "";
let doctores2 = "";
let merge = "";

// Función para mostrar los doctores en la página
function mostrarDoctores(doctores) {
    doctoresContainer.innerHTML = ''; // Limpiar lista existente
    doctores.forEach((doctor) => {
        const { id, nombre, especialidad, anos_experiencia, foto } = doctor;
        const doctorDiv = document.createElement('div');
        doctorDiv.classList.add('col-md-4');
        doctorDiv.innerHTML = `
            <div class="doctor-card card">
                <img src="${foto}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="doctor-info">Especialidad: <strong>${especialidad}</strong></p>
                    <p class="doctor-info">Años de experiencia: <strong>${anos_experiencia}</strong></p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDoctor(${id})">Eliminar</button>
                </div>
            </div>
        `;
        doctoresContainer.appendChild(doctorDiv);
    });
}

// Cargar doctores desde el archivo JSON
async function cargarDoctores() {
    try {
        const response = await fetch('../data/doctores.json'); // Ruta al archivo JSON
        const doctoresData = await response.json(); // Parsear JSON
        doctores = doctoresData;  // Guardar los doctores cargados en la variable global


        const response2 = await fetch('../data/doctores2.json'); // Ruta al archivo JSON
        const doctoresData2 = await response2.json(); // Parsear JSON
        doctores2 = doctoresData2;  // Guardar los doctores cargados en la variable global

        merge = [...doctores, ...doctores2];

        mostrarDoctores(merge); // Mostrar los doctores cargados
        
    } catch (error) {
        console.error('Error al cargar los doctores:', error);
        doctores = []; // Si hay error, asegurarse de que doctores sea un array vacío
        mostrarDoctores(doctores); // Mostrar la lista vacía
    }
}

// Función para eliminar un doctor por su ID
function eliminarDoctor(id) {
    const index = doctores.findIndex(doctor => doctor.id === id);  // Buscar el índice del doctor por ID
    if (index !== -1) {
        doctores.splice(index, 1);  // Eliminar doctor del array
        mostrarDoctores(doctores);  // Volver a mostrar la lista con el doctor eliminado
        alert('Doctor eliminado');
    } else {
        alert('Doctor no encontrado');
    }
}

// Manejar el formulario de agregar doctor
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const especialidad = document.getElementById('especialidad').value;
    const anos_experiencia = document.getElementById('anos_experiencia').value;
    const foto = document.getElementById('foto').value;

    // Asignar un ID único para el nuevo doctor (puedes cambiar la lógica aquí)
    const id = doctores.length ? doctores[doctores.length - 1].id + 1 : 1;

    const nuevoDoctor = {
        id,
        nombre,
        especialidad,
        anos_experiencia,
        foto
    };

    doctores.push(nuevoDoctor); // Añadir el nuevo doctor al array
    mostrarDoctores(doctores); // Mostrar la lista de doctores actualizada
});