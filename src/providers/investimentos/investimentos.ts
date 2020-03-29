import { Injectable } from '@angular/core';
import { Investimento } from '../../models/investimento';

/*
  Generated class for the InvestimentosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvestimentosProvider {

  investimentos : Array<Investimento> = [
      new Investimento(1, "CBD POS DI LIQUIDEZ DIARIA", "Banco Inter", "Regressivo", "Imediato", "100% do CDI"),
      new Investimento(2, "CBD AGIBANK - PRAZO FECHADO", "Banco AGIBANK", "Regressivo", "25/09/2020", "119% do CDI"),
      new Investimento(3, "CBD BMG - PRAZO FECHADO", "Banco BMG", "Regressivo", "25/09/2020", "108% do CDI"),
      new Investimento(4, "CBD BS2 - PRAZO FECHADO", "Banco BS2", "Regressivo", "26/06/2020", "105% do CDI"),
      new Investimento(5, "CBD BTG - PRAZO FECHADO", "Banco BS2", "Regressivo", "06/05/2021", "102,5% do CDI"),
      new Investimento(6, "LCI DI LIQUIDEZ 90 DIAS", "Banco Inter", "Isento", "Após 90 dias", "95.0% do CDI"),
      new Investimento(7, "LCA ABC - PRAZO FECHADO", "Banco ABC", "Isento", "26/06/2020", "97% do CDI"),
      new Investimento(8, "LCA BTG - PRAZO FECHADO", "Banco BTG", "Isento", "17/06/2021", "96% do CDI"),
      new Investimento(9, "CRI DIRECIONAL III", "Direcional Engenharia S.A.", "Isento", "09/04/2021", "CDI + 1,15% a.a."),
      new Investimento(10, "CRI DIRECIONAL III IPCA", "Direcional Engenharia S.A.", "Isento", "18/12/2024", "CDI + 3,55% a.a."),
      new Investimento(11, "CRI FIBRIA DI S80", "Fibria Celulose S.A.", "Isento", "23/06/2020", "110% do CDI"),
    ];

  constructor() { }

  getById(id: number){
    return this.investimentos.find(element => element.id == id);
  }

  listAll(){
    return this.investimentos;
  }
}
