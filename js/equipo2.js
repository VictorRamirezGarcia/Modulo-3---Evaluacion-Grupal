document.addEventListener("DOMContentLoaded",cargarDatosIniciales);

const API_URL = `https://67479f7f38c8741641d739a2.mockapi.io/doctores`
const API_URL2 = `https://67479f7f38c8741641d739a2.mockapi.io/doctores2`
let doctores1 = "";
let doctores2 = "";

async function cargarDatosIniciales() {

  await fetch(API_URL)
  .then((response) => response.json())
  .then((data) =>{
      doctores1 = [...data];
      console.log("Muestra JSON doctores1: ");
      console.log(doctores1);
  })

  await fetch(API_URL2)
  .then((response) => response.json())
  .then((data2) =>{
      doctores2 = [...data2];
      console.log("Muestra JSON doctores2: ");
      console.log(doctores2);
  })

  console.log("XXXMuestra JSON doctores1: ");
  console.log(doctores1);

  console.log("XXXMuestra JSON doctores2: ");
  console.log(doctores2);

  const merge = [...doctores1, ...doctores2];
  console.log("Muestra merge: ");
  console.log(merge);
  cargarEquipoMedico(merge);
}

// //document.addEventListener("DOMContentLoaded", function() {
function cargarEquipoMedico(data) {
    // Seleccionar el contenedor donde vamos a mostrar la información
    const doctorInfoContainer = document.getElementById("doctor-info");

     // Recorrer todos los doctores en el array `doctores`
    data.forEach(doctor => {
        const { nombre, especialidad, anos_experiencia, foto} = doctor;
    // Crear el HTML para mostrar la información en el formato de tarjeta
    const doctorCard = `
      <div class="col">
        <div class="card shadow-sm border-light rounded h-100">
          <img src="${foto}" class="card-img-top" alt="Imagen de ${nombre}" style="object-fit: contain; height: 200px;">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Años de experiencia: ${anos_experiencia}</h6>
            <p class="card-text">${especialidad}</p>
          </div>
        </div>
      </div>
    `;
  
    // Insertar el HTML generado dentro del contenedor
    doctorInfoContainer.innerHTML += doctorCard;
  });
}

//Función para mostrar solo los médicos con más de 5 años de experiencia
// function filtrarMedicos() {
//     Obtener todas las tarjetas de médicos
//     const medicos = document.querySelectorAll('.col');

//     Iterar sobre cada tarjeta de médico
//     medicos.forEach(medico => {
//         Obtener los años de experiencia desde el contenido de la etiqueta <h6>
//         const experienciaText = medico.querySelector('h6').textContent; // Texto dentro del <h6>
//         const experiencia = parseInt(experienciaText.replace('Años de experiencia: ', '').trim()); // Extraer el número
        
//         Si la experiencia es 5 años o menos, ocultamos la tarjeta
//         if (experiencia <= 5) {
//             medico.style.display = 'none';
//         } else {
//             medico.style.display = 'block';
//         }
//     });
// }

// Llamar a la función para filtrar los médicos cuando se cargue la página
//document.addEventListener('DOMContentLoaded', filtrarMedicos);