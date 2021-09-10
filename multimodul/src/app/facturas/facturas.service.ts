import { Injectable } from '@angular/core';
import { Factura } from '../models/factura'

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas:Factura[] = [
    {
      "id": 1,
      "fecha": "08/01/2019",
      "cliente": 3,
      "monto": 3423,
    }
  ];

  constructor() { }

  agregarFactura(f:Factura):void {
    this.facturas.push(f);
  }

  buscarFactura(id:number):Factura {
    let facturaEncontrada:Factura;
    this.facturas.forEach((factura)=>{
      if(factura.id == id) {
        facturaEncontrada = factura;
      }
    });
    return facturaEncontrada;
  }

  obtenerFacturas() {
    return this.facturas;
  }
}
