var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`, `third`];
let flag : boolean = false;

let dato : any = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);

type Animal = 'Cheetah' | 'Lion' | 'Turtle';
const prueba : Animal = "Turtle";

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge };
const myCar: Brands = Brands.Cadillac;

function SaludaAlUsuario() : void {
    console.log('Hola Usuario');
}

function SumaDeNumeros(num1:number, num2:number):number{
    return num1 + num2;
}

function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
  let namesArray: string[];
  if (Array.isArray(names)) {
    namesArray = names;
  } else {
    namesArray = [names];
  }
  if (!greeting) {
    greeting = "Hello";
  }
  return greeting + ", " + namesArray.join(" and ") + "!";
}

class Persona {
  private nombre:string = '';
  private apellidoPaterno:string = '';
  private apellidoMaterno:string = '';

  constructor(n:string, ap:string, am:string, private mayorDeEdad:boolean) {
    this.nombre = n;
    this.apellidoPaterno = ap;
    this.apellidoMaterno = am;
  }

  getINE () {
    return this.mayorDeEdad ? "Puede tramitar el INE" : "No se puede asignar INE";
  }
}

interface IFiguraGeometrica {
  color: string;
  diametro?:number;
  calculaArea():number;
}

class Rectangulo implements IFiguraGeometrica {
  private base:number = 0;
  private altura:number = 0;
  color = 'Verde';
  calculaArea(){
    return this.base * this.altura;
  }
}

class Triangulo implements IFiguraGeometrica {
  private base:number = 0;
  private altura:number = 0;
  color = 'Rojo';
  calculaArea(){
    return (this.base * this.altura) / 2;
  }
}

class TrianguloIsosceles extends Triangulo{

}

let miTriangulo:IFiguraGeometrica = new TrianguloIsosceles();
miTriangulo.color = "verde";
miTriangulo.calculaArea();

class Circulo implements IFiguraGeometrica {
  color = 'Azul';
  radio = 10;
  calculaArea(){
    return Math.PI * Math.pow(this.radio,2)
  }
}