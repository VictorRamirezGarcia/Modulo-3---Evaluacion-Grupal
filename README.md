# ABPro: Desarrollo Completo del Sistema del Hospital con JavaScript Avanzado
## Descripción 
En este proyecto se implementarán objetos JSON, además, de estructuras avanzadas y algoritmos de búsqueda y ordenamiento, al proyecto titulado “Clínica Victor Ramirez”.
## Descripción de los datos manipulados con JSON y cómo se cargan en la interfaz

## Estructura de los Archivos JSON

### 1. **Médicos (medicos.json)**

Contiene la información básica de los médicos disponibles en la clínica. Cada médico tiene un identificador único, su nombre, especialidad, años de experiencia y una foto asociada.

#### Ejemplo:
```json
[
  {
    "id": 1,
    "nombre": "Dr. Victor Retamal",
    "especialidad": "Medicina General",
    "anos_experiencia": 3,
    "foto": "img/01.png"
  },
  ...
]
```

## 2. Pacientes (pacientes.json)

Este archivo contiene los detalles de los pacientes registrados en la clínica. Cada paciente tiene información básica que incluye:

- **RUT**: Identificación única del paciente.
- **Nombre**: Nombre completo del paciente.
- **Fecha de nacimiento**: Fecha en la que nació el paciente.
- **Teléfono**: Número de teléfono de contacto del paciente.
- **Dirección**: Dirección de residencia del paciente.
- **Correo electrónico**: Correo electrónico de contacto del paciente.

### Ejemplo de contenido de `pacientes.json`:

```json
[
  {
    "rut": "12.345.678-9",
    "nombre": "Juan Pérez",
    "fecha_nacimiento": "1985-05-15",
    "telefono": "+56912345678",
    "direccion": "Av. Siempre Viva 123, Santiago",
    "email": "juanperez@email.com"
  },
  {
    "rut": "23.456.789-0",
    "nombre": "Maria Gómez",
    "fecha_nacimiento": "1990-03-22",
    "telefono": "+56923456789",
    "direccion": "Calle Falsa 456, Santiago",
    "email": "mariagomez@email.com"
  },
  {
    "rut": "34.567.890-1",
    "nombre": "Carlos Fernández",
    "fecha_nacimiento": "1978-11-30",
    "telefono": "+56934567890",
    "direccion": "Plaza Mayor 789, Santiago",
    "email": "carlosf@email.com"
  },
  ...
]
```

## 3. Servicios Médicos (servicios.json)

Este archivo describe los servicios médicos que la clínica ofrece a sus pacientes. Cada servicio tiene la siguiente información:

- **id**: Identificador único del servicio.
- **nombre**: Nombre del servicio médico.
- **descripcion**: Descripción detallada de lo que incluye el servicio.
- **foto**: Ruta de la imagen asociada al servicio.

### Ejemplo de contenido de `servicios.json`:

```json
[
  {
    "id": 1,
    "nombre": "Toma Muestras",
    "descripcion": "Realizamos análisis de sangre, orina y otros exámenes clínicos de manera rápida y eficiente.",
    "foto": "img/servicio.png"
  },
  {
    "id": 2,
    "nombre": "Urgencia",
    "descripcion": "Atención inmediata en casos de urgencias menores, con cirugía ambulatoria si es necesario.",
    "foto": "img/servicio.png"
  },
  {
    "id": 3,
    "nombre": "Cardiologia",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 4,
    "nombre": "Neurología",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 5,
    "nombre": "Dermatología",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 6,
    "nombre": "Pediatría",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 7,
    "nombre": "Traumatología",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 8,
    "nombre": "Ginecología",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  },
  {
    "id": 9,
    "nombre": "Oftalmología",
    "descripcion": "Recibe atención médica general con nuestros doctores altamente capacitados.",
    "foto": "img/servicio.png"
  }
]
```

## Cargar los Servicios Médicos en la Interfaz

Para cargar los servicios médicos en la interfaz de usuario, puedes utilizar JavaScript. A continuación se muestra un ejemplo de cómo hacerlo:

```javascript
// Función para cargar los servicios
function cargarServicios() {
    fetch('servicios.json')
    .then(response => response.json())
    .then(data => {
        const serviciosContainer = document.getElementById('servicios-lista');
        
        data.forEach(servicio => {
            const servicioDiv = document.createElement('div');
            servicioDiv.classList.add('servicio');
            
            const nombre = document.createElement('h3');
            nombre.textContent = servicio.nombre;
            const descripcion = document.createElement('p');
            descripcion.textContent = servicio.descripcion;
            const foto = document.createElement('img');
            foto.src = servicio.foto;
            foto.alt = servicio.nombre;
            
            servicioDiv.appendChild(nombre);
            servicioDiv.appendChild(descripcion);
            servicioDiv.appendChild(foto);
            
            serviciosContainer.appendChild(servicioDiv);
        });
    })
    .catch(error => console.error('Error al cargar los servicios:', error));
}

// Llamar la función para cargar los servicios al cargar la página
window.onload = cargarServicios;

```

Este código asegura que los servicios médicos se carguen correctamente en la interfaz y se muestren de manera dinámica en la página web.

## Algoritmos y estructuras de datos utilizados

-	**Búsqueda por especialidad:** en el archivo equipo2.js se crea la función buscarPorEspecialidad donde se realiza la búsqueda por especialidad utilizando include con lowerCase para posteriormente cargar los resultados.

```javascript
function buscarPorEspecialidad(especialidadBuscada) {
  const resultados = merge.filter(doctor => {
    const doctorInfoContainer = document.getElementById("doctor-info");
    return doctor.especialidad.toLowerCase().includes(especialidadBuscada.toLowerCase());
  });
  // Guardar los doctores filtrados en la variable global
  doctoresFiltrados = resultados;
  // Mostrar los resultados en consola
  console.log("Resultados de búsqueda por especialidad:", resultados);
  // Llamar a la función que carga los resultados (puedes adaptarlo para mostrarlo en la página)
  cargarEquipoMedico(resultados);
}
```
  
-	**Ordenamiento por años de experiencia:** en el archivo equipo2.js se crea la función ordenarPorAniosExperiencia, en esta se decide ordenar los doctores de menor a mayor.

```javascript
function ordenarPorAniosExperiencia() {
    const doctoresAOrdenar = doctoresFiltrados.length > 0 ? doctoresFiltrados : merge;
  // Ordenar los doctores por años de experiencia
  const doctoresOrdenados = doctoresAOrdenar.concat(doctores2).sort((a, b) => a.anos_experiencia - b.anos_experiencia);
```

-	**Cola:** en el archivo citas.js hay una cola para almacenar las citas, porsteriormente se agregan objetos bajo el método push, para eliminar se utiliza el método shift.

```javascript
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
```

## Funciones, clases creadas y manejo de eventos 
-	**Programación funcional:**  en el archivo doctores.js en la función calcularCostoTotal() utiliza currying para  calcular el valor a total a cancelar por un paciente de acuerdo al número de consultas realizadas con un doctor en particular. 
```javascript
  // 1. Función de currying para calcular el costo total de los servicios de un paciente
        const calcularCostoTotal = (precioConsulta) => (numeroConsultas) => {
            return precioConsulta * numeroConsultas;
        };
```
En el caso de composición de funciones se utiliza en funciones de los archivos citas.js y doctores.js como por ejemplo en la función para crear una nueva cita. 
-	**clases:** se creó la clase doctor en el archivo clases.js y la subclase pediatra herencia de la clase de doctor, ambas cuentan con funciones asociadas a mostrar su información, calcular costo de consulta, agregar disponibilidad, entre otros. Cabe destacar, que en la clase doctor se utiliza encapsulación mediante setter and getter en el atributo años de experiencia, y en cirujano se utiliza polimorfismo en las funciones.
```javascript
  // Clase base Doctor
class Doctor {
  constructor(nombre, especialidad, anos_experiencia, tarifaBase) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this._anos_experiencia = anos_experiencia;
      this.tarifaBase = tarifaBase;  // Tarifa base de consulta
      this.disponibilidad = []; // Días en que el doctor está disponible
  }
  // Subclase Pediatra
class Pediatra extends Doctor {
  constructor(nombre, anos_experiencia, tarifaBase) {
      super(nombre, "Pediatra", anos_experiencia, tarifaBase);
  }
```
-	**eventos**: Para gestionar las citas de los pacientes en el archivo citas.js se utilizaron event listeners para capturar eventos realizados por los usuarios, como agregar una nueva cita y actualizar la lista de citas.
  ```javascript
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
 ```
### Visualización del proyecto
Para visualizar este proyecto se necesita que previamente cuentes con la instalación de:
- **Git**: [sitio de descarga] (https://git-scm.com/downloads)
- **Node.js**: [sitio de descarga] (https://nodejs.org/en/download/package-manager)
- **Visual Studio Code**: [sitio de descarga] (https://code.visualstudio.com/download)
  
Para visualizar este proyecto debes clonar este repositorio, mediante el siguiente comando:
```bash
git clone https://github.com/VictorRamirezGarcia/Modulo-3---Evaluacion-Grupal
```
Luego mediante tu consola (cmd) posicionarte en la carpeta donde alojaste el proyecto y escribir el siguiente comando: 
```bash
npm  init
```
Una vez cuentes con estos pases es recomendable que utilices un editor como Visual Studio Code para visualizar el código de cada archivo de una forma adecuada, para ello, es necesario contar con dos extensiones, las cuales pueden instalar escribiendo su nombre en la sección extensiones de Visual Studio Code y presionar la opción Install, la primera es **Live Server**, la cual, una vez instalada aparecerá una opción en la esquina inferior derecha de Visual Studio Code titulada como **"Go live"** la cual debes presionar, esto permitirá abrir una pestaña en tu navegador predeterminado y podrás visualizar todo el contenido de la página web. la segunda extensión que debes instalar es **Live Sass Server**, esta extensión, una vez instalada, te mostrara la opción **"watch Sass"** en la esquina inferior derecha la cual al ser seleccionada permitirá que se compile el código Sass incluido y ver los estilos creados en la página web. cabe destacar, que ambas opciones deben de ser seleccionadas de forma paralela para visualizar correctamente el sitio web de la clínica.
