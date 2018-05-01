import { Endereco } from './endereco';

export class Cliente{

    nome: string;
    sobreNome: string;
    rg: number;
    expedidor: string;
    cpf: number;
    cel: string;
    tel: string;

    endereco: Endereco = new Endereco();

}