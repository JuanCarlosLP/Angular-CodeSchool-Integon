import { Component, OnInit } from '@angular/core';

import { Alumno } from '../clases/alumno'

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  public listaAlumnos = [];
  public tipoVista:boolean;

  constructor() { }

  mostrarLista() {
    this.tipoVista = true;
  }

  mostrarTabla() {
    this.tipoVista = false;
  }

  ngOnInit(): void {
    let alumno1:Alumno = new Alumno('Juan', 'Larios', 'juan@gmail.com');
    let alumno2:Alumno = new Alumno('Annia', 'Gasca', 'annia@gmail.com');
    let alumno3:Alumno = new Alumno('Arely', 'Manzano', 'arely@gmail.com');
    let alumno4:Alumno = new Alumno('David', 'Cortez', 'david@gmail.com');
    let alumno5:Alumno = new Alumno('Matias', 'Tapia', 'matias@gmail.com');
    let alumno6:Alumno = new Alumno('Carlos', 'Duenas', 'carlos@gmail.com');
    let alumno7:Alumno = new Alumno('Luis', 'Becerra', 'luis@gmail.com');
    let alumno8:Alumno = new Alumno('Alondra', 'Garcia', 'alondra@gmail.com');

    this.listaAlumnos.push(alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8);
  }

}
