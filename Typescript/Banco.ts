interface ICuenta{
    saldoInicial: number;
    deposito(cantidad:number):number
    retiro(cantidad:number):number;
    consultarSaldo():number;
}

interface ICuentaDeCredito extends ICuenta{
    calcularIntereses():number;
}

class CuentaPersonal implements ICuenta{
    saldoInicial = 100;
    deposito(cantidad:number){
        return  this.saldoInicial + cantidad;
    }
    retiro(cantidad:number){
        return  this.saldoInicial - cantidad;
    }
    consultarSaldo(){
        return  this.saldoInicial;
    }
}

class CuentaEmpresarial implements ICuenta{
    saldoInicial = 1000;
    deposito(cantidad:number){
        return  this.saldoInicial + cantidad;
    }
    retiro(cantidad:number){
        return  this.saldoInicial - cantidad;
    }
    consultarSaldo(){
        return  this.saldoInicial;
    }
}

class TarjetaDeCredito implements ICuentaDeCredito{
    saldoInicial = 12500;
    deposito(cantidad:number){
        return  this.saldoInicial + cantidad;
    }
    retiro(cantidad:number){
        return  this.saldoInicial - cantidad;
    }
    consultarSaldo(){
        return  this.saldoInicial;
    }

    calcularIntereses(){
        let gasto = 12500 - this.saldoInicial;
        if(gasto != 0) {
            return gasto * 0.04;
        } else {
            return 0;
        }
    }
}

let myCuentaPersonal:ICuenta = new CuentaPersonal();
myCuentaPersonal.deposito(400);
myCuentaPersonal.retiro(200);
myCuentaPersonal.consultarSaldo;

let myCuentaEmpresarial:ICuenta = new CuentaEmpresarial();
myCuentaEmpresarial.deposito(2000);
myCuentaEmpresarial.retiro(1200);
myCuentaEmpresarial.consultarSaldo;

let myTarjetaDeCredito:ICuentaDeCredito = new TarjetaDeCredito();
myTarjetaDeCredito.deposito(3000);
myTarjetaDeCredito.retiro(4000);
myTarjetaDeCredito.consultarSaldo;
myTarjetaDeCredito.calcularIntereses;