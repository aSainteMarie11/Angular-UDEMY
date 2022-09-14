import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Una buena práctica es poner arriba las importaciones propias de Angular

//Las siguientes importaciones serían las de terceros


import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';
//Y por último las nuestras

@NgModule({
  //Declaración de los componentes
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
  ],
  //En este caso no hace falta exportar los personajes, porque ya van a estar en el mainPage
  exports: [
    MainPageComponent
  ],
  //Importación de los módulos
  imports: [
    CommonModule,
    FormsModule
  ],
  //Declaración de los servicios
  providers: [
    DbzService
  ]
})
export class DbzModule { }
