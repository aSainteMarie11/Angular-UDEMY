import { CommonModule } from '@angular/common';
import  { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  //Se declaran los componentes
declarations: [
  HeroeComponent,
  ListadoComponent
],
//Declaramos los componentes que queremos que se vean
exports: [
  ListadoComponent
],
//En el import SOLO van los módulos
imports: [
  CommonModule
]

})
export class HeroesModule {}
