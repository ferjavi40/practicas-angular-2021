import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
//servicio 
import { CaballeroService } from '../../servicios/caballero.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {



  @Input() caballeroNuevo: Personaje = {
    nombre: '',
    armadura: '',
    poder: 0,
    signo: '',
    img: ''
  };

constructor( private _caballeroService: CaballeroService ){}



  agregarCaballero() {
    if (this.caballeroNuevo.nombre.trim().length===0){return;}
    this._caballeroService.agregarPersonaje(this.caballeroNuevo);
    this.caballeroNuevo = { nombre: '', armadura: '', poder: 0, signo: '', img: '' }

  }





}
