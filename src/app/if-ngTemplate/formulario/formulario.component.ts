import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

@Input() caballeroBorrado:Personaje [] = [];
@Input() caballero:Personaje [] = [];
@Input() caballeroNuevo:Personaje;
@Input() agregarCaballero: any;
@Input() borrarCaballero: any;

 

}
