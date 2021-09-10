"use strict";
class CuentaPersonal {
    constructor() {
        this.saldoInicial = 100;
    }
    deposito(cantidad) {
        return this.saldoInicial + cantidad;
    }
    retiro(cantidad) {
        return this.saldoInicial - cantidad;
    }
    consultarSaldo() {
        return this.saldoInicial;
    }
}
class CuentaEmpresarial {
    constructor() {
        this.saldoInicial = 1000;
    }
    deposito(cantidad) {
        return this.saldoInicial + cantidad;
    }
    retiro(cantidad) {
        return this.saldoInicial - cantidad;
    }
    consultarSaldo() {
        return this.saldoInicial;
    }
}
class TarjetaDeCredito {
    constructor() {
        this.saldoInicial = 12500;
    }
    deposito(cantidad) {
        return this.saldoInicial + cantidad;
    }
    retiro(cantidad) {
        return this.saldoInicial - cantidad;
    }
    consultarSaldo() {
        return this.saldoInicial;
    }
    calcularIntereses() {
        let gasto = 12500 - this.saldoInicial;
        if (gasto != 0) {
            return gasto * 0.04;
        }
        else {
            return 0;
        }
    }
}
let myCuentaPersonal = new CuentaPersonal();
myCuentaPersonal.deposito(400);
myCuentaPersonal.retiro(200);
myCuentaPersonal.consultarSaldo;
let myCuentaEmpresarial = new CuentaEmpresarial();
myCuentaEmpresarial.deposito(2000);
myCuentaEmpresarial.retiro(1200);
myCuentaEmpresarial.consultarSaldo;
let myTarjetaDeCredito = new TarjetaDeCredito();
myTarjetaDeCredito.deposito(3000);
myTarjetaDeCredito.retiro(4000);
myTarjetaDeCredito.consultarSaldo;
myTarjetaDeCredito.calcularIntereses;
