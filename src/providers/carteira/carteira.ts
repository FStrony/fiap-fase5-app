import { Injectable } from '@angular/core';
import { CarteiraInvestimento } from '../../models/carteiraInvestimentos';
import { ContasProvider } from '../contas/contas';
import { InvestimentosProvider } from '../investimentos/investimentos';

/*
  Generated class for the CarteiraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarteiraProvider {

  investimentos : Array<CarteiraInvestimento> = [
    new CarteiraInvestimento(100, this.contas.getContaById(1), this.investimentosProvider.getById(1)),
    new CarteiraInvestimento(140, this.contas.getContaById(1), this.investimentosProvider.getById(4)),
    new CarteiraInvestimento(160, this.contas.getContaById(1), this.investimentosProvider.getById(6)),
    new CarteiraInvestimento(1260, this.contas.getContaById(1), this.investimentosProvider.getById(10))
  ];

  constructor(public contas: ContasProvider, public investimentosProvider: InvestimentosProvider) {}

  insert(carteira: CarteiraInvestimento){
    this.investimentos.push(carteira);
  }

  getByContaId(id: number){
    return this.investimentos.filter(element => element.contaId == id);
  }
}
