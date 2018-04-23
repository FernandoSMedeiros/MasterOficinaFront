import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemServicoComponent } from './ordemservico.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrdemServicoComponent,
    CadastroComponent
  ],
  exports: [
    OrdemServicoComponent,
    CadastroComponent
  ]
})
export class OrdemservicoModule { }
