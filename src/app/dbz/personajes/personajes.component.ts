import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Con el decorador @Input pasamos la información del módulo padre al hijo
  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  //Injeccción de dependencias
  constructor( private dbzService : DbzService) {}
}
