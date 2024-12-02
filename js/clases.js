class doctor {
    constructor(nombre, especialidad, anos_experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this._anos_experiencia = anos_experiencia; 
    }

    get anos_experiencia() {
    return this._anos_experiencia;
    }

    set anos_experiencia(value) {
    if (value < 0) {
        console.warn('Los anos de experiencia no pueden ser negativos.');
        return;
    }
    this._anos_experiencia = value;
    }

    mostrarInformacion() {
    return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, anos de experiencia: ${this.anos_experiencia}`;
    }

    calcularPacientes() {
      return this.anos_experiencia * 25; 
    }
}

class cirujano extends doctor {
    constructor(nombre, especialidad, años_experiencia, tipoCirugia) {
    super(nombre, especialidad, años_experiencia);
    this.tipoCirugia = tipoCirugia;
    }

    calcularPacientes() {
      return this.años_experiencia * 20; 
    }

    mostrarInformacion() {
    return `${super.mostrarInformacion()}, Tipo de Cirugía: ${this.tipoCirugia}`;
    }
}