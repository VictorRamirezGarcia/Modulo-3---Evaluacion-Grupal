// Clase base Doctor
class Doctor {
  constructor(nombre, especialidad, anos_experiencia, tarifaBase) {
      this.nombre = nombre;
      this.especialidad = especialidad;
      this._anos_experiencia = anos_experiencia;
      this.tarifaBase = tarifaBase;  // Tarifa base de consulta
      this.disponibilidad = []; // Días en que el doctor está disponible
  }

  // Getter y setter para años de experiencia
  get anos_experiencia() {
      return this._anos_experiencia;
  }

  set anos_experiencia(value) {
      if (value < 0) {
          console.warn('Los años de experiencia no pueden ser negativos.');
          return;
      }
      this._anos_experiencia = value;
  }

  // Método para mostrar la información básica del doctor
  mostrarInformacion() {
      return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, Años de experiencia: ${this.anos_experiencia}`;
  }

  // Método para calcular el número de pacientes basado en años de experiencia
  calcularPacientes() {
      return this.anos_experiencia * 30; // Este es un cálculo general, dependiendo del tipo de doctor
  }

  // Método para calcular el costo de consulta (podría ser diferente según especialidad)
  calcularCostoConsulta() {
      return this.tarifaBase; // Tarifa base de consulta
  }

  // Método para agregar disponibilidad
  agregarDisponibilidad(dia) {
      this.disponibilidad.push(dia);
  }

  // Método para mostrar la disponibilidad
  mostrarDisponibilidad() {
      return `Disponibilidad de ${this.nombre}: ${this.disponibilidad.join(", ")}`;
  }
}

// Subclase Cirujano
class Cirujano extends Doctor {
  constructor(nombre, anos_experiencia, tipoCirugia, tarifaBase) {
      super(nombre, "Cirujano", anos_experiencia, tarifaBase);
      this.tipoCirugia = tipoCirugia;
  }

  // Sobrescribir el método de cálculo de pacientes
  calcularPacientes() {
      return this.anos_experiencia * 20; // Cirujanos tienen un número diferente de pacientes por experiencia
  }

  // Sobrescribir el método para mostrar la información con detalles adicionales
  mostrarInformacion() {
      return `${super.mostrarInformacion()}, Tipo de Cirugía: ${this.tipoCirugia}`;
  }

  // Sobrescribir el método para calcular el costo de la consulta (cirugía suele ser más cara)
  calcularCostoConsulta() {
      return super.calcularCostoConsulta() + 50; // Añadir extra por ser cirugía
  }
}

// Subclase Pediatra
class Pediatra extends Doctor {
  constructor(nombre, anos_experiencia, tarifaBase) {
      super(nombre, "Pediatra", anos_experiencia, tarifaBase);
  }

  // Sobrescribir el método de cálculo de pacientes para pediatras
  calcularPacientes() {
      return this.anos_experiencia * 15; // Pediatras suelen ver menos pacientes
  }

  // Sobrescribir el método para mostrar la información con detalles adicionales
  mostrarInformacion() {
      return `${super.mostrarInformacion()}, Especializado en atención infantil`;
  }

  // Sobrescribir el método para calcular el costo de la consulta (puede ser más barato)
  calcularCostoConsulta() {
      return super.calcularCostoConsulta() - 20; // Descuento para pediatría
  }
}

// Ejemplo de uso
let doctor1 = new Doctor("Juan Pérez", "Generalista", 10, 100);
doctor1.agregarDisponibilidad("Lunes");
doctor1.agregarDisponibilidad("Miércoles");
console.log(doctor1.mostrarInformacion());
console.log(doctor1.mostrarDisponibilidad());
console.log(`Costo consulta: $${doctor1.calcularCostoConsulta()}`);

let cirujano1 = new Cirujano("Carlos López", 15, "Cardíaca", 150);
cirujano1.agregarDisponibilidad("Martes");
cirujano1.agregarDisponibilidad("Jueves");
console.log(cirujano1.mostrarInformacion());
console.log(cirujano1.mostrarDisponibilidad());
console.log(`Costo consulta: $${cirujano1.calcularCostoConsulta()}`);

let pediatra1 = new Pediatra("Ana Torres", 8, 80);
pediatra1.agregarDisponibilidad("Viernes");
pediatra1.agregarDisponibilidad("Sábado");
console.log(pediatra1.mostrarInformacion());
console.log(pediatra1.mostrarDisponibilidad());
console.log(`Costo consulta: $${pediatra1.calcularCostoConsulta()}`);
