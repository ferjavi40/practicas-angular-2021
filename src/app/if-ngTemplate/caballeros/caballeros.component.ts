import { Component} from '@angular/core';
import { Personaje } from '../../interfaces/personaje';
//servicio
import { CaballeroService } from '../../servicios/caballero.service';



@Component({
  selector: 'app-caballeros',
  templateUrl: './caballeros.component.html',
  styleUrls: ['./caballeros.component.css']
})
export class CaballerosComponent  {



  constructor( private _caballeroServicio:CaballeroService){}

  get caballero():Personaje[]{
    return this._caballeroServicio.caballero;
  }
}
