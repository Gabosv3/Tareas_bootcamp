/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LibroCabecera = /** @class */ (function () {
    function LibroCabecera(tituloParam, colorParam, fuenteParam) {
        this.Titulo = tituloParam;
        this.Color = colorParam;
        this.Fuente = fuenteParam;
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
        var tipoAlineaciones = ["centrado", "derecha", "izquierda"];
        if (tipoAlineaciones.indexOf(alineacionParam) !== -1) {
            this.Alineacion = alineacionParam;
        }
        else {
            console.error("Debe elegir entre las alineaciones: centrado, derecha o izquierda");
        }
    };
    return LibroCabecera;
}());
var paginita = new LibroCabecera("Mi Página", "azul", "Arial");
console.log("--------------");
paginita.setAlineacion("centrado");
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
/**EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
 */
var cancion = /** @class */ (function () {
    function cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }
    cancion.prototype.getAutor = function () {
        return this.autor;
    };
    cancion.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    return cancion;
}());
var rolitamix2024 = new cancion("la cancion", "pop");
rolitamix2024.setAutor("Bad bunny");
console.log("EJercicio 2");
console.log(rolitamix2024);
console.log(rolitamix2024.getAutor());
console.log("--------------");
/**EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:

Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos. */
var cuenta = /** @class */ (function () {
    function cuenta(nombreParam, cantidadParam, numeroCuentaParam, tipodeCuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.numeroCuenta = numeroCuentaParam;
        this.tipodeCuenta = tipodeCuentaParam;
    }
    cuenta.prototype.Deposito = function (cantidadParam) {
        if (cantidadParam < 5) {
            console.log("No se puede depositar esa cantidad");
        }
        else {
            this.cantidad = this.cantidad + cantidadParam;
            console.log("Deposito exitoso");
        }
    };
    cuenta.prototype.retiro = function (cantidadParam) {
        if (cantidadParam < 5) {
            console.log("No se puede retirar esa cantidad");
        }
        else if (this.cantidad - cantidadParam < 0) {
            console.log("No se puede retirar esa cantidad");
        }
        else {
            this.cantidad = this.cantidad - cantidadParam;
            console.log("Retiro exitoso");
        }
    };
    cuenta.prototype.datos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipodeCuenta));
        console.log("Numero de cuenta: ".concat(this.numeroCuenta));
    };
    return cuenta;
}());
var cuenta1 = new cuenta("Gabriel", 100, "123456", "corriente");
console.log("EJercicio 4");
cuenta1.Deposito(20);
cuenta1.retiro(10);
cuenta1.datos();
console.log("--------------");
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    Persona.prototype.imprimiredad = function () {
        if (this.edad < 18) {
            console.log("Eres menor de edad");
        }
        else {
            console.log("Eres mayor de edad");
        }
    };
    return Persona;
}());
var empleado = /** @class */ (function (_super) {
    __extends(empleado, _super);
    function empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldaParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldaParam;
        return _this;
    }
    empleado.prototype.cargasueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    empleado.prototype.imprimirsueldo = function () {
        console.log("Sueldo: ".concat(this.sueldo));
    };
    empleado.prototype.datosPersonales = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Edad: ".concat(this.edad));
    };
    return empleado;
}(Persona));
var empleado1 = new empleado("Juan", "Pérez", "Calle 123", 55551234, 30, 50000);
// Llamar a los métodos
console.log("EJercicio 5");
empleado1.datosPersonales();
empleado1.imprimiredad();
empleado1.imprimirsueldo();
console.log("--------------");
