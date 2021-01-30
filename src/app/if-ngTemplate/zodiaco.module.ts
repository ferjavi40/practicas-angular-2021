import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { CaballerosComponent } from './caballeros/caballeros.component';




@NgModule({
  declarations: [
    PersonajeComponent,
    CaballerosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PersonajeComponent
  ]
})
export class ZodiacoModule { }
