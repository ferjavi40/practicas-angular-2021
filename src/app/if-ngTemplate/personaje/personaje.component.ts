import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
//servicios
import { CaballeroService } from '../../servicios/caballero.service';



@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  // get personajes():Personaje [] {
  //   return this._calleroService.caballero;
  // }


  constructor(private _calleroService: CaballeroService) {

  }


}
