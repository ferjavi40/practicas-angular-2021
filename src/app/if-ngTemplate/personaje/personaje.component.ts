import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {


  caballero: Personaje[] = [
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

  caballeroNuevo: Personaje = {
    nombre: '',
    armadura: '',
    poder: 0,
    signo: '',
    img: ''
  }


  caballeroBorrado: Personaje[] = [];





  agregarCaballero(){
    this.caballero.push(this.caballeroNuevo);
    this.caballeroNuevo= {nombre:'',armadura:'',poder:0,signo:'',img:''}

  }



  borrarCaballero() {
    const borrado: Personaje = this.caballero.pop();
    return this.caballeroBorrado.push(borrado);
    
  }

  restaurarCaballero() {
    const cabaRestaurado: Personaje = this.caballeroBorrado.pop();
    this.caballero.push(cabaRestaurado);
  }


}
