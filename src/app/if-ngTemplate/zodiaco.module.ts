import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { CaballerosComponent } from './caballeros/caballeros.component';
import { FormularioComponent } from './formulario/formulario.component';




@NgModule({
  declarations: [
    PersonajeComponent,
    CaballerosComponent,
    FormularioComponent
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
