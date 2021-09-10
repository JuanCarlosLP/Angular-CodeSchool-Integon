import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { Note } from '../../models/note'
import { NotasModule } from '../notas.module';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notesService:NotesService) { }

  public notes:Note[] =[];
  titulo:string;
  contenido:string;
  id:string;
  tituloUpdate:string;
  contenidoUpdate:string;
  idUpdate:string;
  idDelete:string;

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes():void {
    this.notesService.getNotes()
      .subscribe(result => this.notes = result); //  Me suscribo y me avisa cuando este listo
  }

  guardarNota() {
    let nuevaNota = new Note();
    nuevaNota.title = this.titulo;
    nuevaNota.content = this.contenido;
    this.notesService.addNote(nuevaNota)
    .subscribe(result => this.notes.push(result));
  }

  actualizarNota() {
    let actualizarNota = new Note();
    actualizarNota.title = this.tituloUpdate;
    actualizarNota.content = this.contenidoUpdate;
    this.notesService.updateNote(this.idUpdate, actualizarNota)
    .subscribe();
    this.getNotes();
  }

  borrarNota():void {
    this.notesService.deleteNote(this.idDelete)
      .subscribe(); //  Me suscribo y me avisa cuando este listo
      this.getNotes();
  }
}
