import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrdemservicoModule } from './ordemservico/ordemservico.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrdemservicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
