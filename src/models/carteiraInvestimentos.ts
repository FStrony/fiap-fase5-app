import { Investimento } from "./investimento";

export class CarteiraInvestimento{
  constructor(valorInvestido: number,investimento: Investimento){
    this.valorInvestido = valorInvestido;
    this.Investimento = investimento;
  }
}

export interface CarteiraInvestimento {
  valorInvestido: number,
  Investimento: Investimento
}
