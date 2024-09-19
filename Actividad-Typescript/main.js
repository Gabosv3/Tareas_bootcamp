/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */
var LibroCabecera = /** @class */ (function () {
    function LibroCabecera(tituloParam, colorParam, fuenteParam, alineacionParam) {
        this.Titulo = tituloParam;
        this.Color = colorParam;
        this.Fuente = fuenteParam;
        this.setAlineacion(alineacionParam);
    }
    /** Getter and Setter */
    /** Getter */
    LibroCabecera.prototype.getTitulo = function () {
        return this.Titulo;
    };
    LibroCabecera.prototype.getColor = function () {
        return this.Color;
    };
    LibroCabecera.prototype.getFuente = function () {
        return this.Fuente;
    };
    LibroCabecera.prototype.getAlineacion = function () {
        return this.Alineacion;
    };
    /** Setter */
    LibroCabecera.prototype.setTitutlo = function (tituloParam) {
        this.Titulo = tituloParam;
    };
    LibroCabecera.prototype.setColor = function (colorParam) {
        this.Color = colorParam;
    };
    LibroCabecera.prototype.setFuente = function (fuenteParam) {
        this.Fuente = fuenteParam;
    };
    LibroCabecera.prototype.setAlineacion = function (alineacionParam) {
        var tipoAlineaciones = ['centrado', 'derecha', 'izquierda'];
        if (tipoAlineaciones.indexOf(alineacionParam) !== -1) {
            this.Alineacion = alineacionParam;
        }
        else {
            console.error("Debe elegir entre las alineaciones: centrado, derecha o izquierda");
        }
    };
    return LibroCabecera;
}());
var paginita = new LibroCabecera("Mi Página", "azul", "Arial", "centrado");
paginita.setAlineacion("jueves");
console.log("EJercicio 1");
console.log(paginita);
console.log("--------------");
/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
 */
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.Sumar = function (num1Param, num2Param) {
        return num1Param + num2Param;
    };
    Calculadora.prototype.Restar = function (num1Param, num2Param) {
        return num1Param - num2Param;
    };
    Calculadora.prototype.Dividir = function (num1Param, num2Param) {
        return num1Param - num2Param;
    };
    Calculadora.prototype.Multiplicar = function (num1Param, num2Param) {
        if (num2Param === 0) {
            return "no se puede dividir entre 0";
        }
        return num1Param + num2Param;
    };
    Calculadora.prototype.potencia = function (baseParam, exponenteParam) {
        return Math.pow(baseParam, exponenteParam);
    };
    Calculadora.prototype.Factorial = function (NumParam) {
        if (NumParam < 0) {
            return "Error: El factorial no está definido para números negativos";
        }
        if (NumParam === 0 || NumParam === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= NumParam; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Ejemplo de uso
var calculadora = new Calculadora();
console.log("EJercicio 2");
console.log("Suma: ".concat(calculadora.Sumar(5, 3)));
console.log("Resta: ".concat(calculadora.Restar(5, 3)));
console.log("Multiplicaci\u00F3n: ".concat(calculadora.Multiplicar(5, 3)));
console.log("Divisi\u00F3n: ".concat(calculadora.Dividir(5, 3)));
console.log("Divisi\u00F3n por cero: ".concat(calculadora.Dividir(5, 0)));
console.log("Potencia: ".concat(calculadora.potencia(2, 3)));
console.log("Factorial de 5: ".concat(calculadora.Factorial(5)));
console.log("Factorial de -1: ".concat(calculadora.Factorial(-1)));
console.log("--------------");
