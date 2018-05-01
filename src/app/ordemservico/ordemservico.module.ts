import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdemServicoComponent } from './ordemservico.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Ordemservico } from './cadastro/ordemServico';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OrdemServicoComponent,
    CadastroComponent,
    ListaComponent
  ],
  exports: [
    OrdemServicoComponent,
    ListaComponent
  ],
  providers: [
    Ordemservico
  ]
})
export class OrdemservicoModule { }
