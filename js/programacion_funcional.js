
console.log("Taller: Programación Funcional, Orientada a Eventos y POO en el Proyecto del Hospital\nContexto:\n En este taller, los estudiantes deberán aplicar los tres paradigmas de programación en JavaScript: funcional, orientada a eventos y orientada a objetos. Estos conceptos se utilizarán para mejorar la funcionalidad y la estructura del sitio web del hospital, añadiendo eventos, asincronía, y estructuras basadas en clases para modelar la información del sitio.");


console.log("1. Programación Funcional en JavaScript (2 puntos)\n- Implementa una función que use currying para calcular el costo total de los servicios de un paciente en función del número de consultas realizadas y el precio de cada consulta.\n- Usa la función flecha para simplificar la sintaxis en una función que calcule el tiempo promedio de espera de los pacientes.\n- Implementa la recursión para calcular de forma recursiva el total de horas de consulta de un doctor a lo largo de la semana.\n- Integra composición de funciones para aplicar descuentos a los costos de consultas en base a la cantidad de consultas realizadas.");


// 1. Función de currying para calcular el costo total de los servicios de un paciente
const calcularCostoTotal = (precioConsulta) => (numeroConsultas) => {
    return precioConsulta * numeroConsultas;
  };

console.log("Se implementa funcion currying para calcular costo toal de servicios");
console.log("const calcularCostoTotal = (precioConsulta) => (numeroConsultas) => { return precioConsulta * numeroConsultas;};")
// Datos de prueba:
const precioConsulta = 50; // Precio por consulta
const numeroConsultas = 10; // Número de consultas
console.log("Se definen el Precio Consulta:" + precioConsulta +  " y Numero de Consulta=" + numeroConsultas);
const costoConsulta = calcularCostoTotal(precioConsulta);
console.log("Se calcula el costo total primero con el precio calcularCostoTotal(precioConsulta) \n");
const costoTotal = costoConsulta(numeroConsultas);
console.log("Se calcula el costo total multiplicando el precio por la cantidad de consulta costoConsulta(numeroConsultas) \n");
console.log("Costo Total:", costoTotal); // 500

  // 2. Función flecha para calcular el tiempo promedio de espera
  const tiempoPromedioEspera = (tiemposEspera) => {
    const totalTiempo = tiemposEspera.reduce((acc, tiempo) => acc + tiempo, 0);
    return totalTiempo / tiemposEspera.length;
  };
  
  // Datos de prueba:
  const tiemposEspera = [30, 45, 20, 60, 15]; // minutos de espera
  console.log("Tiempo Promedio de Espera:", tiempoPromedioEspera(tiemposEspera)); // 34
  
  // 3. Recursión para calcular el total de horas de consulta de un doctor
  const calcularHorasConsulta = (consultas, index = 0, totalHoras = 0) => {
    if (index >= consultas.length) return totalHoras;
    return calcularHorasConsulta(consultas, index + 1, totalHoras + consultas[index]);
  };
  
  // Datos de prueba:
  const horasConsultas = [1, 2, 3, 1.5, 2]; // Horas por consulta
  console.log("Total de Horas de Consulta:", calcularHorasConsulta(horasConsultas)); // 9.5
  
  // 4. Composición de funciones para aplicar descuentos
  const aplicarDescuento = (precio) => precio * 0.9; // Descuento del 10%
  const aplicarDescuentoPorCantidad = (precio, cantidad) => cantidad > 5 ? aplicarDescuento(precio) : precio;
  
  const calcularCostoConDescuento = (precio, cantidad) => aplicarDescuentoPorCantidad(precio, cantidad) * cantidad;
  
  // Datos de prueba:
  const precioConsulta2 = 50;
  const cantidadConsultas = 6;
  console.log("Costo con Descuento:", calcularCostoConDescuento(precioConsulta2, cantidadConsultas)); // 270
  