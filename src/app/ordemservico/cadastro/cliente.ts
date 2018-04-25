import { Endereco } from './endereco';

export class Cliente{

    nome: string;
    sobreNome: string;
    rg: number;
    expedidor: string;
    cpf: number;

    endereco: Endereco = new Endereco();

}