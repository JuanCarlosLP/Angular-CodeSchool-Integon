import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Note } from '../models/note'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient:HttpClient) { }  // Inyeccion de Dependencias

  private url = "http://localhost:3000/notes/";

  getNotes():Observable<Note[]> {
    let notes:Observable<Note[]>;
    notes = this.httpClient.get<Note[]>(this.url).pipe(catchError(this.handleError));
    return notes;
  }

  addNote(newNote:Note):Observable<Note> {
    return this.httpClient.post<Note>(this.url, newNote, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateNote(id:string, changedNote:Note):Observable<Note> {
    const updateUrl = `${this.url}${id}`
    return this.httpClient.put<Note>(updateUrl, changedNote, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteNote(id:string):Observable<unknown> {
    const deleteUrl = `${this.url}${id}`
    return this.httpClient.delete<Note>(deleteUrl, httpOptions)
      .pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse) {
    let mensaje = "Error Desconocido";

    if(error.error instanceof ErrorEvent) { // Client-Side Error
      mensaje = `Error: ${error.error.message}`;
    } else {                                // Server-Side Error
      mensaje = `Error: ${error.status} ${error.message}`;
    }
    return throwError(mensaje);
  }
}
