import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdemservicoModule } from './ordemservico/ordemservico.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent    
  ],
  imports: [
    BrowserModule,
    OrdemservicoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
