import { Investimento } from "./investimento";
import { Conta } from "./conta";

export class CarteiraInvestimento{
  constructor(valorInvestido: number, conta: Conta,investimento: Investimento){
    this.valorInvestido = valorInvestido;
    this.contaId = conta.id;
    this.investimentoId = investimento.id;
  }
}

export interface CarteiraInvestimento {
  contaId: number,
  valorInvestido: number,
  investimentoId: number
}
