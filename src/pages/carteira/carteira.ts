import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarteiraProvider } from '../../providers/carteira/carteira';
import { CarteiraInvestimento } from '../../models/carteiraInvestimentos';
import { ContasProvider } from '../../providers/contas/contas';
import { Conta } from '../../models/conta';
import { InvestimentosPage } from '../investimentos/investimentos';
import { InvestimentosProvider } from '../../providers/investimentos/investimentos';
import { CarteiraDetailPage } from '../carteira-detail/carteira-detail';

/**
 * Generated class for the CarteiraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carteira',
  templateUrl: 'carteira.html',
})
export class CarteiraPage {

  carteira: Array<CarteiraInvestimento> = new Array<CarteiraInvestimento>();
  account: Conta = new Conta(null,null,null,null,null);

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public carteiraProvider: CarteiraProvider,
    public contasProvider: ContasProvider,
    public investimentoProvider: InvestimentosProvider) {
  }

  ionViewWillEnter() { 
    this.account = this.contasProvider.getContaById(this.navParams.get('contaId'));
    this.carteira = this.carteiraProvider.getByContaId(this.navParams.get('contaId'));
  }

  investir(){
    this.navCtrl.push(InvestimentosPage, {id: this.account.id});
  }

  getInvestimentoNome(id: number){
    return (this.investimentoProvider.getById(id)).nome;
  }

  openItem(valorInvestido: number,idInvestimento: number, contaId: number) {
    this.navCtrl.push(CarteiraDetailPage, {valorInvestido: valorInvestido, idInvestimento: idInvestimento, contaId: contaId});
  }
}
