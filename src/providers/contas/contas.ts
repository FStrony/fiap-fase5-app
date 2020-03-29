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
  
  contas : Array<Conta> = [new Conta(1, 'FIAP', 'fiap@fiap.com.br','1234', 1000000)];

  constructor() { }

   insert(conta){
     conta.id = this.contas.length + 1;
     this.contas.push(conta);
   }

   login(conta){
     const contaUsuario  = this.contas.find(element => element.email == conta.email && element.senha == conta.senha)
     return contaUsuario;
   }

   getContaByIndex(index){
     return this.contas[index];
   }

   getContaById(id){
    return this.contas.find(element => element.id == id);
  }
}
