import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PersonajeComponent
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
