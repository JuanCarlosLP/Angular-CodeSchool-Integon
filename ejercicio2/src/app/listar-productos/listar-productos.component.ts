import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  @Input() productoAgregado:string;
  @Input() total:number;
  @Output() compraFinalizada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('Inicializacion Componente listar-productos')
  }

}
