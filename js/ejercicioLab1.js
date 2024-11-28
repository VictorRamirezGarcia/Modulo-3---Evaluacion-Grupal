console.log("A continuacion los ejercicios del Laboratorio Virtual 1. ");
console.log("Contexto:\nEn este laboratorio, los estudiantes implementarán JSON para manipular y transferir datos en el sitio web del hospital, además de trabajar con estructuras de datos avanzadas y crear algoritmos para optimizar las operaciones con estos datos. Los estudiantes también practicarán la clonación, fusión y recorrido de objetos, y la implementación de algoritmos como búsqueda y ordenamiento en JavaScript. ");
console.log("\n");



console.log("\n\n1. Manejo de Objetos JSON (2 puntos)\n- Implementa un objeto JSON que represente el listado de doctores en el hospital(nombre, especialidad, años de experiencia, disponibilidad).\n- Usa objetos anidados para organizar información adicional de cada doctor,como horarios disponibles y contacto.\n- Utiliza destructuring para acceder a las propiedades de estos objetos y mostrar.\n\n");
//1 Manejo de Objetos JSON
console.log("Esto se puede revisar visualmente por la pagina Equipo2.html e internamente por el archivo JSON llamado doctores.js\n");



console.log("\n\n2. Operaciones con JSON (1.5 puntos)\n- Realiza las siguientes operaciones con los objetos JSON:\n- Clonación: Crea una copia de un objeto JSON y modifícalo sin afectar el original.\n- Merge: Fusiona dos objetos JSON. Por ejemplo, puedes fusionar la información de doctores con la lista de servicios médicos disponibles.\n- Recorrido y stringify: Recorre los objetos JSON para mostrar en el navegador la lista de doctores disponibles. Convierte el objeto a una cadena JSON usando JSON.stringify() y muestra el resultado en la consola.\n");
//2. Operaciones con JSON
//Aplicando Clonacion, Merge, Recorrido y stringify en los JSON
console.log("Este es el nombre del primer Doctor original: " + JSON.stringify(doctores[0].nombre) );
console.log("Ahora clonare los Doctores... ");
const doctoresClones = JSON.parse(JSON.stringify(doctores));
console.log("Ahora guardare el primer doctor... ");
const doctorClon = doctoresClones[0];
console.log("Ahora le cambiare el nombre el primer doctor, para que tenga el apellido -->Clonado... ");
doctorClon.nombre = "Dr. Victor Retamal Clonado"; // Modificación solo en la copia
console.log("Ahora mostrare el nombre del doctor original... ");
console.log(doctores[0].nombre );
console.log("Ahora mostrare el nombre del doctor clon... ");
console.log(doctoresClones[0].nombre );
console.log("Ahora volvere a mostrar el nombre del doctor original... ");
console.log(doctores[0].nombre);

//JSON de servicios
const servicios = {
    consultas: ["Cardiología", "Pediatría", "Traumatología"]
};

// Fusionando JSON
console.log("Ahora muestro dos JSON con MERGE correspondiente a los Medicos y los Servicios... ");
const doctoresYServicios = {...doctores, ...servicios}
console.log("Este es el listado de los doctores y servicios con un Merge: " + JSON.stringify(doctoresYServicios, null, 2));
//console.log(JSON.stringify(doctoresYServicios, null, 2));


console.log("\n\n3. Implementación de Estructuras de Datos (2 puntos)\n- Implementa estructuras de datos en el sitio web del hospital para gestionar mejor la información de los doctores:\n- Arreglos: Utiliza un arreglo para almacenar la lista de doctores. Implementa operaciones como agregar, eliminar y buscar doctores dentro del arreglo.\n- Pilas: Implementa una pila para gestionar las citas de los pacientes (última cita agendada, próxima cita a atender, etc.).\n- Colas: Crea una cola para simular el orden de llegada de los pacientes en la página de contacto.\n");
//3. Implementación de Estructuras de Datos

//Arreglo
//const doctoresArreglo = [];
 // Recorrer todos los doctores en el array `doctores`
// doctores.forEach(doctor => {
//    const { nombre, especialidad, anos_experiencia, disponibilidad, contacto, foto, sigla } = doctor;
//    doctoresArreglo.push(doctor.nombre);
//});
// Lista de doctores (solo con nombres)
//console.log("Este es el listado de Doctores en un arreglo: " + doctoresArreglo);




console.log("\n\nAhora se veran los ejercicios con Arreglos de Doctores.\n ");
//Arreglo
//Arreglo de los doctores
const doctoresArreglo = [
    "Dr. Victor Retamal",
    "Dra. Claudia Villagran",
    "Dra. Sofia Saavedra",
    "Dra. Karen Alvear"
];
// Lista de doctores (solo con nombres)
console.log("Este es el listado de Doctores en un arreglo: " + doctoresArreglo);

// Función para agregar un doctor (nombre)
function agregarDoctor(nombre) {
    doctoresArreglo.push(nombre);
}
agregarDoctor("Dra. Karina Garcia")
console.log("Este es el listado de Doctores en un arreglo con la Dra. Karina Garcia agregada: " + doctoresArreglo);

// Función para eliminar un doctor por nombre
function eliminarDoctor(nombre) {
    doctoresArreglo.pop();
}
eliminarDoctor("Dra. Karina Garcia")
console.log("Este es el listado de Doctores en un arreglo con la Dra. Karina Garcia eliminada: " + doctoresArreglo);

// Función para buscar un doctor por nombre
function buscarDoctor(nombre) {
    if (doctoresArreglo.find(doctor => doctor === nombre)) {
        return " encontrado en el arreglo.";
    } else {
        return " no encontrado en el arreglo.";
    }
}
console.log("Ahora se buscara a la Dra. Claudia Villagran en el arreglo de Doctores..")
const doctorBuscado = "Dra. Claudia Villagran";
const resultadoBusqueda = buscarDoctor(doctorBuscado);
console.log( doctorBuscado + resultadoBusqueda); 





console.log("\n\nAhora se veran los ejercicios con Pilas de Citas.\n ");
//Pilas
// Pila de citas (LIFO)
let pilaCitas = [
    { 
    paciente: "Juan Pérez", 
    especialidad: "Cardiología", 
    hora: "10:00 AM" 
    },
    { 
    paciente: "Luis Gonzales", 
    especialidad: "Medicina General", 
    hora: "10:00 AM" 
    }
    ,
    { 
    paciente: "Natalia Luengo", 
    especialidad: "Pediatria", 
    hora: "10:00 AM" 
    }
    ,
    { 
    paciente: "Sixto Nuñez", 
    especialidad: "Geriatria", 
    hora: "10:00 AM" 
    }
    ,
    { 
    paciente: "Victor Perez", 
    especialidad: "Cardiologia", 
    hora: "10:00 AM" 
    }
    ,
    { 
    paciente: "Mercedes Sosa", 
    especialidad: "Medicina General", 
    hora: "10:00 AM" 
    }
];


// Funcion para mostrar el listado de Citas
function mostrarCitas() {
    let listadoCitas="";
    console.log("Esta es la Pila de Citas actuales: \n");
    pilaCitas.forEach(cita => {
        const { paciente, especialidad, hora } = cita;
    listadoCitas += "\nPacinete:" + cita.paciente + "\nEspecialidad: " + cita.especialidad + "\nHora: " + cita.hora + "\n\n";
})
console.log(listadoCitas);
}
mostrarCitas();

// Función para agendar una cita
function agendarCita(paciente, especialidad, hora) {
    pilaCitas.push({ paciente: paciente, especialidad: especialidad, hora: hora });
    console.log("Cita agendada Exitosamente para el Paciente " + paciente + " de la Especialidad: " + especialidad + " a la Hora " + hora + "\n");

}
agendarCita("Gonzalo Ramirez",  "Cardiología", "10:00 AM");
mostrarCitas();

// Función para eliminar la ultima cita agendada
function eliminarUltimaCita() {
    pilaCitas.pop();
    console.log("Ultima Cita eliminada de la Cola exitosamente. ");
}
eliminarUltimaCita();
mostrarCitas();

// Función para mostrar la ultima cita agendada
function mostrarUltimaCita() {
    let ultimoElemento = pilaCitas[pilaCitas.length - 1];
    let ultimaCita = "\nPacinete:" + ultimoElemento.paciente + "\nEspecialidad: " + ultimoElemento.especialidad + "\nHora: " + ultimoElemento.hora + "\n\n";
    console.log("Esta es la ultima cita agendada en la pila actual: \n" + ultimaCita);
}
mostrarUltimaCita();

// Función para mostrar la primera cita agendada
function mostrarPrimeraCita() {
    let ultimoElemento = pilaCitas[0];
    let ultimaCita = "\nPacinete:" + ultimoElemento.paciente + "\nEspecialidad: " + ultimoElemento.especialidad + "\nHora: " + ultimoElemento.hora + "\n\n";
    console.log("Esta es la primera cita agendada en la pila actual: \n" + ultimaCita);
}
mostrarPrimeraCita();

// Función para atender la última cita agendada
function atenderCita() {
    return pilaCitas.pop();
}





console.log("\n\nAhora se veran los ejercicios con Cola de Pacientes.\n ");
//Colas
// Cola de pacientes (FIFO)
let colaPacientes = [
    { 
    nombre: "Juan Pérez",
    },
    { 
    nombre: "Luis Gonzales"
    }
    ,
    { 
    nombre: "Natalia Luengo"
    }
    ,
    { 
    nombre: "Sixto Nuñez"
    }
    ,
    { 
    nombre: "Victor Perez"
    }
    ,
    { 
    nombre: "Mercedes Sosa"
    }
];

// Función para mostrar la Cola de pacientes
function mostrarColaPacientes() {
    let listadoPacientes="";
    console.log("Esta es la Cola de pacientes actual:\n");
    colaPacientes.forEach(paciente => {
        const { nombre } = paciente;
        listadoPacientes += "\nNombre:" + paciente.nombre + "\n\n";
})
console.log(listadoPacientes);
}
mostrarColaPacientes();


// Función para agregar un paciente a la cola
function agregarPacienteACola(nombre) {
    colaPacientes.push({ nombre });
    console.log("Paciente " + nombre + " agregado a la Cola Exitosamente." + "\n");
}
agregarPacienteACola("Carlos Sánchez");
mostrarColaPacientes();


// Función para atender al primer paciente en la cola
function atenderPrimerPacienteCola() {
    let primerElemento = colaPacientes[0];
    colaPacientes.shift(); // shift() elimina el primer elemento de la cola
    console.log("Paciente " + primerElemento.nombre + " atendido Exitosamente." + "\n");
}
atenderPrimerPacienteCola();

mostrarColaPacientes();


console.log("\n\n4. Programación de Algoritmos (1.5 puntos)\n- Implementa un algoritmo de búsqueda que permita encontrar un doctor específico dentro del arreglo de doctores.\n- Implementa un algoritmo de ordenamiento para organizar la lista de doctores por años de experiencia.\n- Explica en el archivo README la complejidad de los algoritmos utilizados, aplicando conceptos de Big-O y complejidad ciclomática.\n");
//4 Programación de Algoritmos

//Declaro nuevamente el arreglo de los doctores
//Arreglo
//Arreglo de los doctores
const doctoresArreglo2 = [
    "Dr. Victor Retamal",
    "Dra. Claudia Villagran",
    "Dra. Sofia Saavedra",
    "Dra. Karen Alvear"
];
// Lista de doctores (solo con nombres)
console.log("Este es el arreglo de Doctores2 en un arreglo: " + doctoresArreglo2);


// Función de búsqueda
function buscarDoctor2(nombre) {
    let doctorBuscado = nombre;
    for (let i = 0; i < doctoresArreglo2.length; i++) {
        if (doctoresArreglo2[i] === nombre) {
            return "Doctor encontrado: " + doctorBuscado;
        }
    }
    return "Doctor no encontrado: " + doctorBuscado;
}

// Ejemplo de búsqueda
console.log(buscarDoctor2("Dra. Sofia Saavedra")); // Doctor encontrado: Dra. Sofia Saavedra
console.log(buscarDoctor2("Dr. Juan Pérez")); // Doctor no encontrado

//Se declara otro arreglo con los doctores y un campo de años de experiencia.
const doctoresConExperiencia = [
    { nombre: "Dr. Victor Retamal", experiencia: 10 },
    { nombre: "Dra. Claudia Villagran", experiencia: 5 },
    { nombre: "Dra. Sofia Saavedra", experiencia: 8 },
    { nombre: "Dra. Karen Alvear", experiencia: 12 }
];
console.log( "Este es el arreglo de doctores con experiencia original: \n");
console.log( doctoresConExperiencia);


// Función de ordenamiento (Bubble Sort)
function ordenarDoctoresPorExperiencia(doctores) {
    let n = doctores.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (doctores[j].experiencia > doctores[j + 1].experiencia) {
                // Intercambiamos los elementos
                let temp = doctores[j];
                doctores[j] = doctores[j + 1];
                doctores[j + 1] = temp;
            }
        }
    }
    return doctores;
}

// Ejemplo de ordenamiento
let doctoresOrdenados = ordenarDoctoresPorExperiencia(doctoresConExperiencia);
console.log( "Este es el arreglo de doctores con experiencia ordenados con funcion de burbuja: \n");
console.log(doctoresOrdenados);