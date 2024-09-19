/**EJERCICIO 5: 
Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.*/

function Ejercicio5(coche, precio) {
    let descuento = 0;
  
    if (coche === "FORD FIESTA") {
      descuento = 0.05;
    } else if (coche === "FORD FOCUS") {
      descuento = 0.1;
    } else if (coche === "FORD ESCAPE") {
      descuento = 0.2;
    } else {
      return "Modelo de coche no válido.";
    }
  
    const montoDescuento = precio * descuento;
    const precioFinal = precio - montoDescuento;
  
    return (
      "El coche seleccionado es: " +
      coche +
      " y se aplicará un descuento de: $" +
      montoDescuento.toFixed(2) +
      ". El precio final después del descuento es: $" +
      precioFinal.toFixed(2)
    );
  }
  
  let resultado5 = Ejercicio5("FORD ESCAPE", 25000);
  
  //quitar comentario para mostrar en html
  document.getElementById('resultado').innerText = resultado5;


/**EJERCICIO 7: 
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares
 */

function ValidarNumero(valor) {
    return !isNaN(valor) && Number.isInteger(Number(valor));
}

function Ejercicio7() {
    let negativos = 0;
    let positivos = 0;
    let multiplode15 = 0;
    let pares = 0;
  
    // Pedimos al usuario que ingrese 10 números mediante prompt
    for (let i = 0; i < 10; i++) {
        let input;
        let numeroValido = false;

        // Validación del número ingresado
        while (!numeroValido) {
            input = prompt(`Ingrese el número ${i + 1}:`);
            
            if (ValidarNumero(input)) {
                numeroValido = true; 
            } else {
                alert("Por favor, ingrese un número entero válido.");
            }
        }

        let numero = parseInt(input, 10);

        if (numero < 0) {
            negativos++;
        }

        if (numero > 0) {
            positivos++;
        }

        if (numero % 15 === 0) {
            multiplode15++;
        }

        if (numero % 2 === 0) {
            pares += numero;
        }
    }
  
    document.getElementById("resultado2").innerHTML = `
    <p>Cantidad de valores negativos ingresados: ${negativos}</p>
    <p>Cantidad de valores positivos ingresados: ${positivos}</p>
    <p>Cantidad de múltiplos de 15: ${multiplode15}</p>
    <p>Valor acumulado de los números pares: ${pares}</p>
`;
  }
  
  // Llamamos a la función
  Ejercicio7();