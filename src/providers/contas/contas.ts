import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContasProvider {

  contas = [{
    nome: 'fiap',
    email: 'fiap@fiap.com.br',
    senha: 'fiap',
    saldo: 1000000,
    investimentos: [{}]
   }];

  constructor() { }

   insert(conta){
     this.contas.push(conta);
   }
   update(investimento, index){
     this.contas[index].investimentos.push(investimento);
   }
}
