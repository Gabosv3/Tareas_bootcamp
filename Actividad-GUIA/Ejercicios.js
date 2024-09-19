/* Ejercicio #1
Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.  */

function Ejercicio1(edad) {
  return "Es mayor de edad:  " + (edad > 18 ? "si" : "no");
}

let Resultado1 = Ejercicio1(17);
console.log(Resultado1);

/* Ejercicio #2
Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */

function Ejercicio2(nombre, carnet, examen, tareas, asistencia, investigación) {
  let Resutado =
    examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigación * 0.3;

  return (
    "El estudiante: " +
    nombre +
    " con el carnet: " +
    carnet +
    " a obtenido la nota de: " +
    Resutado
  );
}

let Resultado2 = Ejercicio2("Gabriel Castillo ", "k00002596", 10, 10, 10, 10);
console.log(Resultado2);

/** Ejercicio #3
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este Ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial. */

// Tabla de categorías de aumento
const categoriasAumento = {
  A: 0.15,
  B: 0.3,
  C: 0.1,
  D: 0.2,
};

// Función para calcular el aumento salarial
function Ejercicio3(nombre, salario, categoria) {
  // Validar si la categoría existe en la tabla de aumentos
  if (!categoriasAumento[categoria]) {
    return `Categoría ${categoria} no válida.`;
  }

  // Calcular el aumento basado en la categoría
  const porcentajeAumento = categoriasAumento[categoria];
  const aumento = salario * porcentajeAumento;
  const nuevoSalario = salario + aumento;

  // Retornar resultados en un string
  return (
    "El empleado: " +
    nombre +
    " con el salario actual: $" +
    salario +
    " y la categoría: " +
    categoria +
    " ha obtenido un aumento de: $" +
    aumento.toFixed(2) +
    ". El nuevo salario es: $" +
    nuevoSalario.toFixed(2)
  );
}

// Ejemplo de uso
let resultado3 = Ejercicio3("Juan Pérez", 2500, "B");
console.log(resultado3);

/* Ejercicio #4
Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo */

function Ejercicio4(num1, num2) {
  return "El numero mayor es:  " + (num1 > num2 ? num1 : num2);
}

let Resultado4 = Ejercicio4(4, 5);

console.log(Resultado4);

/**Ejercicio 6: 
Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.*/

// Función para calcular el descuento en base al destino turístico
function Ejercicio6(origen, destino, precio) {
  let descuento = 0;

  if (origen === "Palma" && destino === "La costa del Sol") {
    descuento = 0.05;
  } else if (origen === "Palma" && destino === "Panchimalco") {
    descuento = 0.1;
  } else if (origen === "Palma" && destino === "Puerto el Triunfo") {
    descuento = 0.15;
  } else {
    return "Destino no válido o no aplica descuento.";
  }

  const montoDescuento = precio * descuento;

  const precioFinal = precio - montoDescuento;

  return (
    "Origen: " +
    origen +
    ", Destino: " +
    destino +
    ", Descuento aplicado: $" +
    montoDescuento.toFixed(2) +
    ", Precio final: $" +
    precioFinal.toFixed(2)
  );
}

let resultado6 = Ejercicio6("Palma", "Panchimalco", 300);
console.log(resultado6);



/** Ejercicio #8
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

function Ejercicio8(num1) {
  for (let i = 1; i <= 10; i++) {
    console.log(num1 * i);
  }
}

Ejercicio8(10);

/**
 
 */

function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit < 32) {
        return "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

function Ejercicio9(celsius) {
   
    let fahrenheit = convertirCelsiusAFahrenheit(celsius);

    let clasificacion = clasificarTemperatura(fahrenheit);

    console.log(`Temperatura en Celsius: ${celsius}°C, Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F, Clasificación: ${clasificacion}`);
}

Ejercicio9(25);  
