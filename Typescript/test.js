"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
let flag = false;
let dato = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
const myCar = Brands.Cadillac;
function SaludaAlUsuario() {
    console.log('Hola Usuario');
}
function SumaDeNumeros(num1, num2) {
    return num1 + num2;
}
function hello(names, greeting) {
    let namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = "Hello";
    }
    return greeting + ", " + namesArray.join(" and ") + "!";
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No se puede asignar INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = 'Verde';
    }
    calculaArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = 'Rojo';
    }
    calculaArea() {
        return (this.base * this.altura) / 2;
    }
}
class TrianguloIsosceles extends Triangulo {
}
let miTriangulo = new TrianguloIsosceles();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
class Circulo {
    constructor() {
        this.color = 'Azul';
        this.radio = 10;
    }
    calculaArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
