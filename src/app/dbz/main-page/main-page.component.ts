import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Goku',
    poder: 17500
  }

  constructor() {}
}
