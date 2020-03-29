export class Investimento{
  constructor(  id: number, nome: string, emissor: string, ir: string, resgate: string, taxa: string){
    this.id = id;
    this.nome = nome;
    this.emissor = emissor;
    this.ir = ir;
    this.resgate = resgate;
    this.taxa = taxa;
  }
}

export interface Investimento {
  id: number,
  nome: string,
  emissor: string,
  ir: string,
  resgate: string,
  taxa: string
}
