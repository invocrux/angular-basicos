import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Ironman';
  edad: number = 45;
  obtenerNombre():string { 
    return `Nombre: ${this.nombre} - edad ${this.edad}`;
  }
  
   get nombreCapitalizado(): string {
    return this.nombre.toUpperCase()
  }

  cambiarNombre(): void {
    this.nombre = 'Hulk';
  }

  cambiarEdad(): void{
    this.edad = 50;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
