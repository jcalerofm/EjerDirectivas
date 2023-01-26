import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Ejercicio de Directivas';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  password:string = "";
  entradas:Array<{titulo:string}>;

  constructor(){
    this.entradas = [
      {titulo: "Python nos gusta cada vez mas"},
      {titulo: "Java the best"},
      {titulo: "JavaScript cada vez mas funcional"},
      {titulo: "Ionic potensia pa tu carro"},
      {titulo: "Que pasa con C++?"}
    ];
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = "El usuario " + this.nombre + " se ha registrado con exito";
  }

}
