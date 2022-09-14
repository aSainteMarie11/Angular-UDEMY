import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interdace';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  //Con el decorador @Input pasamos la información del módulo padre al hijo
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //Con el decorador @Output pasamos la información del módulo hijo al padre; Sirve para emitir eventos
  //@Output() onNuevoPersonaje: EventEmitter<Personaje>= new EventEmitter();

  //Injección del servicio para poder utilizarlo en toda la clase
  constructor( private dbzService: DbzService) {}

  agregar() {
    if ( this.nuevo.nombre.trim() == '' ) { return; }

    this.dbzService.agregarPerosnaje( this.nuevo );
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
