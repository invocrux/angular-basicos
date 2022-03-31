import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  borrando = false;
  heroeBorrado: string = '';
  
  listado: string[] = ['Ironman', 'Hulk', 'Spiderman','Thor','Capitan America'];

  borrarElemento(estado:boolean): void {
    const heroeBorrado = this.listado.pop() || '';
    this.heroeBorrado = heroeBorrado;
    this.borrando= true;
   
  }
  
}
