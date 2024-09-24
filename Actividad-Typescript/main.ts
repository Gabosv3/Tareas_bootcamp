/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */

class LibroCabecera {
    private Titulo: string;
    private Color: string;
    private Fuente: string;
    private Alineacion: string;

    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
        this.Titulo = tituloParam;
        this.Color = colorParam;
        this.Fuente = fuenteParam;
    }

    /** Getter and Setter */

    /** Getter */

    getTitulo(): string {
        return this.Titulo;
    }

    getColor(): string {
        return this.Color;
    }
    getFuente(): string {
        return this.Fuente;
    }
    getAlineacion(): string {
        return this.Alineacion;
    }

    /** Setter */

    setTitutlo(tituloParam: string) {
        this.Titulo = tituloParam;
    }

    setColor(colorParam: string) {
        this.Color = colorParam;
    }
    setFuente(fuenteParam: string) {
        this.Fuente = fuenteParam;
    }

    setAlineacion(alineacionParam: string) {
        const tipoAlineaciones: string[] = ["centrado", "derecha", "izquierda"];
        if (tipoAlineaciones.indexOf(alineacionParam) !== -1) {
            this.Alineacion = alineacionParam;
        } else {
            console.error(
                "Debe elegir entre las alineaciones: centrado, derecha o izquierda"
            );
        }
    }
}

let paginita = new LibroCabecera("Mi Página", "azul", "Arial");
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

class Calculadora {
    Sumar(num1Param: number, num2Param: number): number {
        return num1Param + num2Param;
    }

    Restar(num1Param: number, num2Param: number): number {
        return num1Param - num2Param;
    }

    Dividir(num1Param: number, num2Param: number): number {
        return num1Param - num2Param;
    }
    Multiplicar(num1Param: number, num2Param: number): number | string {
        if (num2Param === 0) {
            return "no se puede dividir entre 0";
        }
        return num1Param + num2Param;
    }

    potencia(baseParam: number, exponenteParam: number): number {
        return Math.pow(baseParam, exponenteParam);
    }

    Factorial(NumParam: number): number | string {
        if (NumParam < 0) {
            return "Error: El factorial no está definido para números negativos";
        }
        if (NumParam === 0 || NumParam === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= NumParam; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejemplo de uso
const calculadora = new Calculadora();
console.log("EJercicio 2");
console.log(`Suma: ${calculadora.Sumar(5, 3)}`);
console.log(`Resta: ${calculadora.Restar(5, 3)}`);
console.log(`Multiplicación: ${calculadora.Multiplicar(5, 3)}`);
console.log(`División: ${calculadora.Dividir(5, 3)}`);
console.log(`División por cero: ${calculadora.Dividir(5, 0)}`);
console.log(`Potencia: ${calculadora.potencia(2, 3)}`);
console.log(`Factorial de 5: ${calculadora.Factorial(5)}`);
console.log(`Factorial de -1: ${calculadora.Factorial(-1)}`);
console.log("--------------");

/**EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
• Crea un método para mostrar los datos de la canción.
 */

class cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autorParam: string) {
        this.autor = autorParam;
    }
}

let rolitamix2024 = new cancion("la cancion", "pop");
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

class cuenta {
    private nombre: string;
    private cantidad: number;
    private numeroCuenta: string;
    private tipodeCuenta: string;

    constructor(nombreParam: string,cantidadParam: number,numeroCuentaParam: string,tipodeCuentaParam: string) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.numeroCuenta = numeroCuentaParam;
        this.tipodeCuenta = tipodeCuentaParam;
    }

    Deposito(cantidadParam: number) {
        if (cantidadParam < 5) {
            console.log("No se puede depositar esa cantidad");
        } else {
            this.cantidad = this.cantidad + cantidadParam;
            console.log("Deposito exitoso");
        }
    }

    retiro(cantidadParam: number) {
        if (cantidadParam < 5) {
            console.log("No se puede retirar esa cantidad");
        } else if (this.cantidad - cantidadParam < 0) {
            console.log("No se puede retirar esa cantidad");
        } else {
            this.cantidad = this.cantidad - cantidadParam;
            console.log("Retiro exitoso");
        }
    }

    datos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipodeCuenta}`);
        console.log(`Numero de cuenta: ${this.numeroCuenta}`);
    }

}

let cuenta1 = new cuenta("Gabriel", 100, "123456", "corriente");
console.log("EJercicio 4");
cuenta1.Deposito(20);
cuenta1.retiro(10);
cuenta1.datos();
console.log("--------------");

/**JERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */
abstract class Persona {

    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: number;
    protected edad: number;

    constructor (nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }

    imprimiredad(): void {
        if (this.edad < 18) {
            console.log("Eres menor de edad");
        } else {
            console.log("Eres mayor de edad");
        }
    }

    abstract datosPersonales(): void;
}

class empleado extends Persona {
    private sueldo: number;

    constructor (nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number, sueldaParam: number) {
        super (nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
        this.sueldo = sueldaParam;
    }

    cargasueldo(sueldoParam: number): void {
        this.sueldo = sueldoParam;
    }

    imprimirsueldo(): void {
        console.log(`Sueldo: ${this.sueldo}`);
    }

    datosPersonales(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
    } 
}

let empleado1 = new empleado("Juan", "Pérez", "Calle 123", 55551234, 30, 500);

// Llamar a los métodos
console.log("EJercicio 5");
empleado1.datosPersonales();
empleado1.imprimiredad();
empleado1.imprimirsueldo();
console.log("--------------");


