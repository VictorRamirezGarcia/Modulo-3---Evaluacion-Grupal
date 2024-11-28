    // Mostrar los datos en consola
    console.log("Bienvenido a la pagina web de nuestra clinica. \n");
    console.log("Todo nuestro equipo esta dispuesto para solucionar todos los problemas de salud de usted y su familia ");

    document.addEventListener("DOMContentLoaded",cargarDatosIniciales);    
    
    async function cargarDatosIniciales() {
    
    await fetch("data/servicios.json")
    .then((response) => response.json())
    .then((data) =>{
        cargarServicios(data);
    })
    }

    function cargarServicios(data) {
        // Seleccionar el contenedor donde vamos a mostrar la información
        const doctorInfoContainer = document.getElementById("servicios-info");
    
         // Recorrer todos los doctores en el array `doctores`
        data.forEach(servicio => {
            const { nombre, descripcion, foto} = servicio;
        // Crear el HTML para mostrar la información en el formato de tarjeta
        const servicioCard = `
        <div class="col-md-4 mb-4">
          <div class="card border-0 shadow-sm h-100">
            <img src="${foto}" class="card-img-top" alt="Imagen Servicio de ${nombre}">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-text">${descripcion}</p>
            </div>
          </div>
        </div>

        `;
      
        // Insertar el HTML generado dentro del contenedor
        doctorInfoContainer.innerHTML += servicioCard;
      });
    }