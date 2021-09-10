import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {
  public result:number = 0;
  public number1:number = null;
  public number2:number = null;
  public operation:number;
  public userName:string = 'JuanCarlosLP';
  public operaciones:string[]=['Suma', 'Resta', 'Multiplicacion', 'Division'];
  public today = new Date();

  constructor() { }

  limpiaCajasEjecutado() {
    this.number1 = null;
    this.number2 = null;
    this.result = 0;
  }

  hacerOperation() {
    if(this.operation == 0)
      this.result = this.number1 + this.number2;

    if(this.operation == 1)
      this.result = this.number1 - this.number2;

    if(this.operation == 2)
      this.result = this.number1 * this.number2;

    if(this.operation == 3)
      this.result = this.number1 / this.number2;
  }

  ngOnInit(): void {
  }

}
