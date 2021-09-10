export class Alumno {
  public nombre:string;
  public apellidos:string;
  public correo:string;
  public fechaIngreso = new Date();

  constructor(n:string, a:string, c:string){
    this.nombre = n;
    this.apellidos = a;
    this.correo = c;
    this.fechaIngreso;
  }
}
