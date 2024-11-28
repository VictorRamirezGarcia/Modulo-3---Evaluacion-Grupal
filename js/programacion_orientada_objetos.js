console.log("3. Programación Orientada a Objetos en JavaScript (2.5 puntos)\n- Implementa una clase Doctor con las propiedades nombre, especialidad, y años de experiencia.\n- Añade un método para mostrar la información de cada doctor y otro para calcular el total de pacientes atendidos por el doctor.\n- Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las funcionalidades de la clase base.\n- Implementa el encapsulamiento en la clase, protegiendo la propiedad de años de experiencia mediante un getter y un setter.\n- Usa el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule el número de operaciones realizadas en lugar de consultas.\n\n");
// 1. Clase Doctor con propiedades y métodos
class Doctor {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._anosExperiencia = 0; // Propiedad privada
        this.pacientesAtendidos = 0;
    }

    mostrarInformacion() {
        return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, Años de experiencia: ${this._anosExperiencia}`;
    }

    atenderPaciente() {
        this.pacientesAtendidos++;
    }

    calcularPacientesAtendidos() {
        return this.pacientesAtendidos;
    }

    get ObtenerAnosExperiencia() {
        return this._anosExperiencia;
    }

    set SetearAnosExperiencia(nuevosAnos) {
        if (nuevosAnos > 0) {
            this._anosExperiencia = nuevosAnos;
        } else {
            console.log('Años de experiencia no válidos');
        }
    }
}

// Datos de prueba:
const doctor1 = new Doctor('Juan Pérez', 'Cardiología');
doctor1.SetearAnosExperiencia = 10; 
const obtenidoAnosDoc = doctor1.ObtenerAnosExperiencia;
console.log(obtenidoAnosDoc); // 10
doctor1.atenderPaciente();
console.log(doctor1.mostrarInformacion()); // Doctor Juan Pérez, Especialidad: Cardiología, Años de experiencia: 10
console.log(doctor1.calcularPacientesAtendidos()); // 1

// 2. Subclase Cirujano que extiende a Doctor
class Cirujano extends Doctor {
    constructor(nombre, anosExperiencia, numeroOperaciones) {
    super(nombre, 'Cirugía', anosExperiencia);
    this.numeroOperaciones = numeroOperaciones;
    }
    calcularOperaciones() {
    return this.numeroOperaciones;
    }
    atenderPaciente() {
      this.numeroOperaciones++; // Aumenta operaciones en vez de pacientes
    }
}
  // Datos de prueba:
const cirujano1 = new Cirujano('Pedro Gómez', 15, 200);
cirujano1.atenderPaciente(); // Aumenta operaciones
console.log(cirujano1.mostrarInformacion()); // Doctor Pedro Gómez, Especialidad: Cirugía, Años de experiencia: 15
console.log(cirujano1.calcularOperaciones()); // 201

console.log("ACA SE TERMINA TODOS LOS EJERCICIOS");