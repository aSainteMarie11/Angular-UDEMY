import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola mundo!</h1>
    <!--Las dos llaves "{{}}" es la f orma de comunicarse
      con el con las propiedade del component.ts e incluso expresiones de JS-->
    <h1> {{title}} </h1>
    <h1> {{1 + 1}} </h1>

    <!--Ejercicio del contador-->
    <h1> {{titulo}} </h1>
    <!--Por norma general, todas las operaciones se hacen en el "components.ts y la llamada se hace en el html"
    <button (click)="cont = cont + 1">+</button>
    <span> {{cont}} </span>
    <button (click)="cont = cont - 1">-</button>
    <br><br>-->

    <h3>Ejercicio video 40</h3>
    <h4>La base es de: {{base}}</h4>

    <!--Pasandole las funciones"-->
    <button (click)="acumular(base)">+ {{base}}</button>
    <span> {{cont}} </span>
    <button (click)="acumular(-base)">- {{base}}</button>

  `
})
export class ContadorComponent {

  title = '01-BASES';
  //Es común meterle el tipado a las propiedades
  titulo: string = 'Contador App';
  cont: number = 0;

  //Tarea Curso, video 40
  base: number = 5;

  acumular( valor: number){
    this.cont += valor;
  }
}
