import { CarteiraInvestimento } from "./carteiraInvestimentos";

export class Conta{
  constructor(id: number, nome: string, email: string,senha: string,saldo: number){
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.saldo = saldo;
  }
}

export interface Conta {
  id: number,
  nome: string,
  email: string,
  senha: string,
  saldo: number
}
