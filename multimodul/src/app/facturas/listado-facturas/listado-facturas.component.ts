import { Component, OnInit } from '@angular/core';
import { Factura } from '../../models/factura';
import { FacturasService } from '../facturas.service'

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas: Factura[];
  idBuscado: string;

  constructor(private fs:FacturasService) { }

  ngOnInit(): void {
    this.facturas=this.fs.obtenerFacturas();
  }

  agregarFactura():void {
    let nuevaFactura:Factura = {
      "id": Math.trunc(Math.random()*(1000-5)+5),
      "fecha": '7/9/2021',
      "cliente": Math.trunc(Math.random()*(10-1)+1),
      "monto":Math.trunc(Math.random()*(500000-30000)+30000),
    }
    this.fs.agregarFactura(nuevaFactura);
  }

  buscarFactura() {
    let facturaBuscada = this.fs.buscarFactura(parseInt(this.idBuscado));
    console.log(facturaBuscada);
  }
}
