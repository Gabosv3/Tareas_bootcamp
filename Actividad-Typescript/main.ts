/**
 * EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
 */

class LibroCabecera{
   private Titulo: string;
   private Color:string;
   private Fuente:string;
   private Alineacion:string;

   
    constructor(tituloParam:string,colorParam:string,fuenteParam:string,alineacionParam: string){
        this.Titulo = tituloParam;
        this.Color = colorParam;
        this.Fuente = fuenteParam;
        this.setAlineacion(alineacionParam);
    }

    /** Getter and Setter */

    /** Getter */

    
    getTitulo() : string {
        return  this.Titulo;
    }

    getColor() : string {
        return this.Color
    }
    getFuente() : string {
        return this.Fuente
    }
    getAlineacion() : string {
        return this.Alineacion
    }


    /** Setter */
    
    setTitutlo(tituloParam : string) {
        this.Titulo = tituloParam;
    }

    setColor(colorParam : string) {
        this.Color = colorParam;
    }
    setFuente(fuenteParam : string) {
        this.Fuente = fuenteParam;
    }
    
    setAlineacion(alineacionParam: string) {
        const tipoAlineaciones: string[] = ['centrado', 'derecha', 'izquierda'];
        if (tipoAlineaciones.indexOf(alineacionParam) !== -1) {
            this.Alineacion = alineacionParam;
        } else {
            console.error("Debe elegir entre las alineaciones: centrado, derecha o izquierda");
        }
    }


    
}

let paginita = new LibroCabecera("Mi Página", "azul", "Arial","centrado");
console.log("--------------")
paginita.setAlineacion("jueves");
console.log("EJercicio 1")

console.log(paginita)
console.log("--------------")

/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
 */

class Calculadora{

    Sumar(num1Param:number,num2Param:number):number{
        return num1Param + num2Param;
    }

    Restar(num1Param:number,num2Param:number):number{
        return num1Param - num2Param;
    }

    Dividir(num1Param:number,num2Param:number):number{
        return num1Param - num2Param;
    }
    Multiplicar(num1Param:number,num2Param:number):number | string{
       if(num2Param === 0 ){
            return "no se puede dividir entre 0";
       }
        return num1Param + num2Param;
    }

    potencia(baseParam: number, exponenteParam: number): number {
        return Math.pow(baseParam, exponenteParam);
    }

    Factorial(NumParam: number): number | string {
        if ( NumParam< 0) {
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
console.log("EJercicio 2")
console.log(`Suma: ${calculadora.Sumar(5, 3)}`);
console.log(`Resta: ${calculadora.Restar(5, 3)}`);
console.log(`Multiplicación: ${calculadora.Multiplicar(5, 3)}`);
console.log(`División: ${calculadora.Dividir(5, 3)}`);
console.log(`División por cero: ${calculadora.Dividir(5, 0)}`);
console.log(`Potencia: ${calculadora.potencia(2, 3)}`);
console.log(`Factorial de 5: ${calculadora.Factorial(5)}`);
console.log(`Factorial de -1: ${calculadora.Factorial(-1)}`);
console.log("--------------")

