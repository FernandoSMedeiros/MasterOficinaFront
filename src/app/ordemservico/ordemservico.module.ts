import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdemServicoComponent } from './ordemservico.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Ordemservico } from './cadastro/ordemServico';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OrdemServicoComponent,
    CadastroComponent
  ],
  exports: [
    OrdemServicoComponent
  ],
  providers: [
    Ordemservico
  ]
})
export class OrdemservicoModule { }
