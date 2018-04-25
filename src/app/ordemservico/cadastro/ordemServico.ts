import { Aparelho } from './aparelho';
import { Cliente } from "./cliente";
import { Injectable } from '@angular/core';

@Injectable()
export class Ordemservico{
    
    cliente: Cliente = new Cliente();
    aparelho: Aparelho = new Aparelho();

    condicaoAparelho: string;
    observacoes: string;
    
}