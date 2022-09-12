import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Ironma', 'Spiderman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  //noBorrado: string = 'No ha borrado nada'

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

  }
}
