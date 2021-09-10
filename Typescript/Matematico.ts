function Suma(num1:number, num2:number):number{
    return num1 + num2;
}

function Resta(num1:number, num2:number):number{
    return num1 - num2;
}

function Multiplicacion(num1:number, num2:number):number{
    return num1 * num2;
}

function Division(num1:number, num2:number):number{
    return num1 / num2;
}


const MayorDeDosNumeros = (num1:number, num2:number):number => {
    let mayor = 0;
    if (num1 > num2) {
        mayor = num1;
    }
    if (num2 > num1) {
        mayor = num2;
    }
    return mayor;
}


enum Role { Admin, User, SuperUser };
type Department = 'MKT' | 'Finanzas' | 'HR';

function AgregarUsuario(nombre:string, rol:Role, depto:Department):void{
    console.log('Usuario Agregado')
}

AgregarUsuario('Carlos', Role.Admin, 'Finanzas')