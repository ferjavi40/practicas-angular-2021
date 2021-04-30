import { Injectable } from '@angular/core';
//interface
import { Personaje } from '../interfaces/personaje';


@Injectable({
  providedIn: 'root'
})
export class CaballeroService {

  private _caballero: Personaje[] = [
    {
      nombre: 'Shaka',
      armadura: 'Oro',
      poder: 500,
      signo: 'Virgo',
      img: 'assets/images/zodiaco/shaka.jpg'

    },
    {
      nombre: 'Saga',
      armadura: 'Oro',
      poder: 800,
      signo: 'Geminis',
      img: 'assets/images/zodiaco/saga.jpg'
    },
    {
      nombre: 'Dohko',
      armadura: 'Plata',
      poder: 600,
      signo: 'Libra',
      img: 'assets/images/zodiaco/dohko.jpg'
    }
  ];

  get caballero(): Personaje[] {
    return this._caballero;
  }

  constructor() { }

  agregarPersonaje(personaje: Personaje) {
    this._caballero.push(personaje);
  }

}
