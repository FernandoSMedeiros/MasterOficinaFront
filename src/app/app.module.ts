import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdemservicoModule } from './ordemservico/ordemservico.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
//import { routing } from './app.routing';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,    
    RelatoriosComponent    
  ],
  imports: [
    BrowserModule,
    OrdemservicoModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
