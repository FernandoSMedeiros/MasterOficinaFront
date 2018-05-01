import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrdemservicoModule } from './ordemservico/ordemservico.module';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    OrdemservicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
