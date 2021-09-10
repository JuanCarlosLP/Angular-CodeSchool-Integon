"use strict";
function Suma(num1, num2) {
    return num1 + num2;
}
function Resta(num1, num2) {
    return num1 - num2;
}
function Multiplicacion(num1, num2) {
    return num1 * num2;
}
function Division(num1, num2) {
    return num1 / num2;
}
const MayorDeDosNumeros = (num1, num2) => {
    let mayor = 0;
    if (num1 > num2) {
        mayor = num1;
    }
    if (num2 > num1) {
        mayor = num2;
    }
    return mayor;
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperUser"] = 2] = "SuperUser";
})(Role || (Role = {}));
;
function AgregarUsuario(nombre, rol, depto) {
    console.log('Usuario Agregado');
}
AgregarUsuario('Carlos', Role.Admin, 'Finanzas');
