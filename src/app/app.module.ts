import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';

@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionando o FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }