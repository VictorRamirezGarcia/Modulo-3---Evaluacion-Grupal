//document.addEventListener("DOMContentLoaded",cargarCitasDesdeJSON);
document.addEventListener("DOMContentLoaded", function() {
    cargarServicios();
    cargarMedicos();
    cargarPacientes();
    cargarCitasDesdeJSON();
});

let doctores1 = "";
let doctores2 = "";
let merge = "";

// Referencia al select de especialidad
const selectEspecialidad = document.getElementById("especialidad");
// Función para cargar los servicios desde el archivo JSON
function cargarServicios() {
    fetch('../data/servicios.json')
        .then(response => response.json())
        .then(servicios => {
            // Limpiar las opciones existentes (si las hay)
            selectEspecialidad.innerHTML = '';

            // Agregar una opción predeterminada
            const opcionDefault = document.createElement('option');
            opcionDefault.value = '';
            opcionDefault.textContent = 'Selecciona un servicio';
            selectEspecialidad.appendChild(opcionDefault);

            // Recorrer los servicios y agregar una opción para cada uno
            servicios.forEach(servicio => {
                const opcion = document.createElement('option');
                opcion.value = servicio.id;
                opcion.textContent = servicio.nombre + " id->" + servicio.id;
                selectEspecialidad.appendChild(opcion);
            });
        })
        .catch(error => {
            console.error('Error al cargar los servicios:', error);
        });
}


// Referencia al select de especialidad
const selectMedicos = document.getElementById("doctor");
// Función para cargar los servicios desde el archivo JSON
async function cargarMedicos() {

    // Limpiar las opciones existentes (si las hay)
    selectMedicos.innerHTML = '';
    await fetch("https://67479f7f38c8741641d739a2.mockapi.io/doctores")
    .then((response) => response.json())
    .then((data) =>{
        doctores1 = [...data];
        // Limpiar las opciones existentes (si las hay)
        //selectMedicos.innerHTML = '';

        // Agregar una opción predeterminada
        const opcionDefault = document.createElement('option');
        opcionDefault.value = '';
        opcionDefault.textContent = 'Selecciona un servicio';
        selectMedicos.appendChild(opcionDefault);

        // Recorrer los servicios y agregar una opción para cada uno
        doctores1.forEach(medicos => {
            const opcion = document.createElement('option');
            opcion.value = medicos.id;
            opcion.textContent = medicos.nombre + " id->" + medicos.id;
            selectMedicos.appendChild(opcion);
        });
    })
  
    await fetch("https://67479f7f38c8741641d739a2.mockapi.io/doctores2")
    .then((response) => response.json())
    .then((data2) =>{
        doctores2 = [...data2];
        // Limpiar las opciones existentes (si las hay)
        //selectMedicos.innerHTML = '';

        // Agregar una opción predeterminada
        //const opcionDefault = document.createElement('option');
        //opcionDefault.value = '';
        //opcionDefault.textContent = 'Selecciona un servicio';
        //selectMedicos.appendChild(opcionDefault);

        // Recorrer los servicios y agregar una opción para cada uno
        doctores2.forEach(medicos => {
            const opcion = document.createElement('option');
            opcion.value = medicos.id;
            opcion.textContent = medicos.nombre;
            selectMedicos.appendChild(opcion);
        });
    })
}





// Referencia al select de pacientes
const selectPacientes = document.getElementById("paciente");
// Función para cargar los servicios desde el archivo JSON
function cargarPacientes() {
    fetch('../data/pacientes.json')
        .then(response => response.json())
        .then(pacientes => {
            // Limpiar las opciones existentes (si las hay)
            selectPacientes.innerHTML = '';

            // Agregar una opción predeterminada
            const opcionDefault = document.createElement('option');
            opcionDefault.value = '';
            opcionDefault.textContent = 'Selecciona un paciente';
            selectPacientes.appendChild(opcionDefault);

            // Recorrer los servicios y agregar una opción para cada uno
            pacientes.forEach(paciente => {
                const opcion = document.createElement('option');
                opcion.value = paciente.id;
                opcion.textContent = paciente.nombre + " Rut->" + paciente.rut;
                selectPacientes.appendChild(opcion);
            });
        })
        .catch(error => {
            console.error('Error al cargar los pacientes:', error);
        });
}




// Cola para almacenar citas
class ColaCitas {
    constructor() {
        this.citas = [];
    }

    // Agregar una cita a la cola
    agregarCita(cita) {
        this.citas.push(cita); // insertar al final (FIFO)
    }

    // Eliminar la cita más antigua (es decir, la más próxima)
    eliminarCita() {
        return this.citas.shift(); // elimina el primer elemento (FIFO)
    }

    // Obtener todas las citas
    obtenerCitas() {
        return this.citas;
    }
}

// Inicializamos la cola de citas
const colaCitas = new ColaCitas();

    // Referencias a los elementos del DOM
    const agregarCitaForm = document.getElementById("agregarCitaForm");
    const eliminarCitaBtn = document.getElementById("eliminarCitaBtn");
    const verCitasBtn = document.getElementById("verCitasBtn");
    const citasContainer = document.getElementById("citas-container");

    const API_CITAS = "../data/citas.json";

    // Función para cargar las citas desde el archivo JSON
    function cargarCitasDesdeJSON() {
        fetch(API_CITAS)
            .then(response => response.json())
            .then(citas => {
                // Cargar las citas en la cola
                citas.forEach(cita => {
                    colaCitas.agregarCita(cita);
                });
                // Actualizar la lista de citas
                actualizarListaCitas();
            })
            .catch(error => {
                console.error("Error al cargar las citas:", error);
            });
    }


    // Función para actualizar la lista de citas en la interfaz
    function actualizarListaCitas() {
        // Limpiar el contenedor antes de agregar nuevas citas
        citasContainer.innerHTML = '';

        // Obtener las citas actuales de la cola
        const citas = colaCitas.obtenerCitas();

        // Cargar los servicios y médicos desde los archivos JSON
    Promise.all([
        fetch('../data/servicios.json').then(response => response.json()),  // Cargar servicios
        fetch('../data/pacientes.json').then(response => response.json()),  // Cargar pacientes
        fetch("https://67479f7f38c8741641d739a2.mockapi.io/doctores").then(response => response.json()),  // Cargar doctores desde la primera API
        fetch("https://67479f7f38c8741641d739a2.mockapi.io/doctores2").then(response => response.json())   // Cargar doctores desde la segunda API
    ])
    .then(([servicios, pacientes, doctores1, doctores2]) => {
        
        // Mapeamos los servicios por su id para acceder a ellos fácilmente
        const serviciosMap = servicios.reduce((acc, servicio) => {
            acc[servicio.id] = servicio;
            return acc;
        }, {});

        // Mapeamos los pacientes por su id para acceder a ellos fácilmente
        const pacientesMap = pacientes.reduce((acc, paciente) => {
            acc[paciente.rut] = paciente;
            return acc;
        }, {});
        
        // Unir los dos conjuntos de datos de médicos
        const mergedDoctors = [...doctores1, ...doctores2];
        // Mapeamos los médicos por su id para acceder a ellos fácilmente
        const medicosMap = mergedDoctors.reduce((acc, medico) => {
            acc[medico.id] = medico;
            return acc;
        }, {});

        citas.forEach((cita) => {
            const { id, dia, hora, especialidad, doctor, estado, pacienteRut  } = cita;

            // Obtener el nombre de la especialidad utilizando el id de la especialidad
            const especialidadInfo = serviciosMap[especialidad] || {};
            const especialidadNombre = especialidadInfo.nombre || 'Especialidad no disponible';

            // Obtener el nombre del paciente utilizando el rut del paciente
            const pacienteInfo = pacientesMap[pacienteRut] || {};
            const pacienteNombre = pacienteInfo.nombre || 'Paciente no disponible'

            // Obtener el nombre del médico utilizando el id del médico
            const medicoInfo = medicosMap[doctor] || {};
            const medicoNombre = medicoInfo.nombre || 'Médico no disponible'

                    // Lógica para determinar el texto del botón según el estado
            let botonTexto = '';
            if (estado === 1) {
                botonTexto = 'Guardada'; // Estado 1: "Guardada"
            } else if (estado === 2) {
                botonTexto = 'Confirmada'; // Estado 2: "Confirmada"
            }
            // Crear la tarjeta para cada cita
            const citaCard = `
            <div class="col-md-4">
                <div class="card cita-card ${estado === 2 ? 'confirmada' : ''}">
                    <div class="card-body">
                        <h5 class="card-title">${especialidadNombre}</h5>
                        <h6>${estado === 1 ? 'Guardada' : 'Guardada'}</h6>
                        <p class="cita-info"><strong>Dia:</strong> ${dia}</p>
                        <p class="cita-info"><strong>Hora:</strong> ${hora}</p>
                        <p class="cita-info"><strong>Doctor:</strong>${medicoNombre}</p>
                        <p class="cita-info"><strong>Paciente:</strong>${pacienteNombre}</p>
                        <button class="btn btn-danger" onclick="eliminarCita(${id})">Eliminar</button>
                        <button class="btn btn-primary" onclick="guardarCita(${id})" ${estado === 2 ? 'disabled' : ''}>
                            ${botonTexto}
                        </button>
                    </div>
                </div>
            </div>
            `;
            citasContainer.innerHTML += citaCard;
        });
    })
    .catch(error => {
        console.error('Error al cargar los servicios o médicos:', error);
    });
}

    // Función para agregar una nueva cita
    agregarCitaForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Obtener los datos del formulario
        const dia = document.getElementById("dia").value;
        const hora = document.getElementById("hora").value;
        const especialidad = document.getElementById("especialidad").value;
        const doctor = document.getElementById("doctor").value;

        // Crear una nueva cita con un id único
        const nuevaCita = { id: Date.now(), dia, hora, especialidad, doctor, estado: 1  };

        // Agregar la nueva cita a la cola
        colaCitas.agregarCita(nuevaCita);

        // Actualizar la lista de citas
        actualizarListaCitas();

        // Limpiar el formulario
        agregarCitaForm.reset();
    });

    // Función para eliminar una cita por su id
    window.eliminarCita = function(id) {
        console.log("Eliminando cita con ID:", id); // Depuración: verificar el id recibido

        // Encontramos la cita en la cola usando su id
        const index = colaCitas.citas.findIndex(cita => cita.id === id);
        if (index !== -1) {
            // Eliminar la cita de la cola
            colaCitas.citas.splice(index, 1);
            alert("Cita eliminada correctamente.");

            // Actualizar la lista de citas
            actualizarListaCitas();
        } else {
            alert("Cita no encontrada.");
        }
    }



    // Función para gestionar las citas (ver todas las citas)
    verCitasBtn.addEventListener("click", function() {
    actualizarListaCitas();
    // Cargar las citas desde el archivo JSON cuando el DOM esté listo
    //cargarCitasDesdeJSON();
    });


    // Función para guardar (confirmar) una cita
window.guardarCita = function(id) {
    console.log("Guardando (confirmando) cita con ID:", id); // Depuración: verificar el id recibido

    // Encontramos la cita en la cola usando su id
    const cita = colaCitas.citas.find(cita => cita.id === id);
    if (cita && cita.estado === 1) {
        // Cambiar el estado de la cita a "confirmada" (estado 2)
        cita.estado = 2;
        alert("Cita confirmada correctamente.");

        // Actualizar la lista de citas
        actualizarListaCitas();

        // Aquí, en un entorno real, deberías enviar una solicitud al servidor para actualizar el archivo JSON
    } else {
        alert("Cita ya está confirmada o no encontrada.");
    }
}

// Función para gestionar las citas (ver todas las citas)
//cargarCitasDesdeJSON();
