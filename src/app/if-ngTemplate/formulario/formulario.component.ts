import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  // @Input() caballeroBorrado: Personaje[] = [];
  // @Input() caballero: Personaje[] = [];

  @Input() caballeroNuevo: Personaje = {
    nombre: '',
    armadura: '',
    poder: 0,
    signo: '',
    img: ''
  };

  @Output() onNuevoCaballero: EventEmitter<Personaje>= new EventEmitter<Personaje>();
 



  agregarCaballero() {
    this.onNuevoCaballero.emit(this.caballeroNuevo)
    this.caballeroNuevo = { nombre: '', armadura: '', poder: 0, signo: '', img: '' }

  }





}
