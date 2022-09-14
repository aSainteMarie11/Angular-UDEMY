import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interdace';

//La diferencia entre un servicio y un componente es el decorador @Inectable()
@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
    nombre: 'Broly',
    poder: 18000
   },
   {
    nombre: 'MaginBU',
    poder: 17000
   }
  ];

  get personajes(): Personaje[] {
    //Forma más segura
    return [...this._personajes];
  }

  constructor() {}

  agregarPerosnaje( personaje: Personaje) {
    this._personajes.push( personaje );
  }

}
