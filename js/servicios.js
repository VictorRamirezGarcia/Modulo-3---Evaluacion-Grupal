document.addEventListener("DOMContentLoaded", function() {
    cargarServicios();
});

const form = document.getElementById('agregarServicioForm');  // Formulario para agregar un servicio
const serviciosContainer = document.getElementById('servicios-container');  // Contenedor de servicios
let servicios = [];  // Asegúrate de que 'servicios' esté inicializado como un array vacío

// Función para mostrar los servicios en la página
function mostrarServicios(servicios) {
    serviciosContainer.innerHTML = ''; // Limpiar lista existente
    servicios.forEach((servicio) => {
        const { id, nombre, descripcion, foto } = servicio;
        const servicioDiv = document.createElement('div');
        servicioDiv.classList.add('col-md-4');
        servicioDiv.innerHTML = `
            <div class="servicio-card card">
                <img src="${foto}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="servicio-info">Descripción: <strong>${descripcion}</strong></p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarServicio(${id})">Eliminar</button>
                </div>
            </div>
        `;
        serviciosContainer.appendChild(servicioDiv);
    });
}

// Cargar servicios desde el archivo JSON
async function cargarServicios() {
    try {
        const response = await fetch('../data/servicios.json'); // Ruta al archivo JSON
        const serviciosData = await response.json(); // Parsear JSON
        servicios = serviciosData;  // Guardar los servicios cargados en la variable global
        mostrarServicios(servicios); // Mostrar los servicios cargados
    } catch (error) {
        console.error('Error al cargar los servicios:', error);
        servicios = []; // Si hay error, asegurarse de que servicios sea un array vacío
        mostrarServicios(servicios); // Mostrar la lista vacía
    }
}

// Función para eliminar un servicio por su ID
function eliminarServicio(id) {
    const index = servicios.findIndex(servicio => servicio.id === id);  // Buscar el índice del servicio por ID
    if (index !== -1) {
        servicios.splice(index, 1);  // Eliminar servicio del array
        mostrarServicios(servicios);  // Volver a mostrar la lista con el servicio eliminado
        alert('Servicio eliminado');
    } else {
        alert('Servicio no encontrado');
    }
}

// Manejar el formulario de agregar servicio
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const foto = document.getElementById('foto').value;

    // Asignar un ID único para el nuevo servicio (puedes cambiar la lógica aquí)
    const id = servicios.length ? servicios[servicios.length - 1].id + 1 : 1;

    const nuevoServicio = {
        id,
        nombre,
        descripcion,
        foto
    };

    servicios.push(nuevoServicio); // Añadir el nuevo servicio al array
    mostrarServicios(servicios); // Mostrar la lista de servicios actualizada
});
