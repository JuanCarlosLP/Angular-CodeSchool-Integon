import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Post } from '../models/post'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }  // Inyeccion de Dependencias

  private url = "https://jsonplaceholder.typicode.com/posts/";

  getPosts():Observable<Post[]> {
    let posts:Observable<Post[]>;
    posts = this.httpClient.get<Post[]>(this.url).pipe(catchError(this.handleError));
    return posts;
  }

  addPost(post:Post):Observable<Post> {
    return this.httpClient.post<Post>(this.url, post, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updatePost(post:Post):Observable<Post> {
    return this.httpClient.put<Post>(this.url, post, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deletePost(id:number):Observable<unknown> {
    const deleteUrl = `${this.url}${id}`
    return this.httpClient.delete<Post>(deleteUrl, httpOptions)
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
