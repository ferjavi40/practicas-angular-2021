import { Component, Input} from '@angular/core';
import { Personaje } from '../../interfaces/personaje';


@Component({
  selector: 'app-caballeros',
  templateUrl: './caballeros.component.html',
  styleUrls: ['./caballeros.component.css']
})
export class CaballerosComponent  {

  @Input() caballero: Personaje [] = [];


}
