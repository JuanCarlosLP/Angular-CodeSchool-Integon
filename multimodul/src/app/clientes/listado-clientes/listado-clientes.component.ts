import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service'

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  constructor(private clientesService:ClientesService) {
  }

  public clientes = []

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

}
