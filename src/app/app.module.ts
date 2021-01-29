import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Modulos
import { ZodiacoModule } from './if-ngTemplate/zodiaco.module';
//components
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ZodiacoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
