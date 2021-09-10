import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy, OnChanges {
  public producto:string;
  public precio:number;
  public listaProductos=[];
  public total:number = 0;

  constructor() { }

  agregarProducto() {
    let nuevoProducto = {
      "nombre": this.producto,
      "precio": this.precio
    }
    this.total += this.precio;
    this.listaProductos.push(nuevoProducto);
  }

  concluirCompra() {
    alert('Compra finalizada Exitosamente');
    this.producto='';
    this.precio=null;
    this.listaProductos=[];
    this.total=0;
  }

  ngOnInit(): void {
    console.log('Inicializacion Componente productos')
  }

  ngOnDestroy(): void {
    console.log('Destruccion Componente productos')
  }

  ngOnChanges(): void {
    console.log('Cambios en Componente productos')
  }
}
