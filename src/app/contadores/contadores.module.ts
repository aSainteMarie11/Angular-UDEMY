import { CommonModule } from '@angular/common';
import  { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  //Se declaran los componentes
declarations: [
  ContadorComponent
],
//Declaramos los componentes que queremos que se vean
exports: [
  ContadorComponent
],
//En el import SOLO van los módulos
imports: [
  CommonModule
]

})
export class ContadorModule {}
