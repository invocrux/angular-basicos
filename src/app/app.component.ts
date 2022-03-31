import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  numero = 10;
  base = 5;
  baseFija: number = 5;

  sumar(valor:any){
    this.numero += valor;
  }

  potencia(potencia:number){
    this.base **= potencia;
  }
  
  restaurar() {
    return this.base=5;
  }

}


