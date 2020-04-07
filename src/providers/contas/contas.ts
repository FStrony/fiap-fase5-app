import { Injectable } from '@angular/core';
import { Conta } from '../../models/conta';
import { CarteiraInvestimento } from '../../models/carteiraInvestimentos';
import { Investimento } from '../../models/investimento';

/*
  Generated class for the ContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContasProvider {
  
  contas : Array<Conta> = [new Conta(1, 'FIAP', 'fiap@fiap.com.br','1234', 10000)];

  constructor() { }

  insert(conta: Conta){
    conta.id = this.contas.length + 1;
    this.contas.push(conta);
  }

  login(conta){
    const contaUsuario  = this.contas.find(element => element.email == conta.email && element.senha == conta.senha)
    return contaUsuario;
  }

  debitarById(id: number, valor: number){
    let index: number = this.contas.findIndex(conta => conta.id == id);
    if (index >= 0){
      this.contas[index].saldo = Number(this.contas[index].saldo) - Number(valor);
    }
  }

  depositarById(id: number, valor: number){
    let index: number = this.contas.findIndex(conta => conta.id == id);
    if (index >= 0){
      this.contas[index].saldo = Number(this.contas[index].saldo) + Number(valor);
    }
  }

  getContaByIndex(index: number){
    return this.contas[index];
  }

  getContaById(id: number){
    return this.contas.find(element => element.id == id);
  }
}
