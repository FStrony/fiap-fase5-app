import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Investimento } from '../../models/investimento';
import { InvestimentosProvider } from '../../providers/investimentos/investimentos';

/**
 * Generated class for the CarteiraDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carteira-detail',
  templateUrl: 'carteira-detail.html',
})
export class CarteiraDetailPage {

  valorInvestido: number = null;
  investimento: Investimento = new Investimento(null,null,null,null,null,null);

  constructor(public navCtrl: NavController, public navParams: NavParams, public investimentoProvider: InvestimentosProvider) {
  }

  ionViewWillEnter() { 
    this.valorInvestido = this.navParams.get('valorInvestido');
    this.investimento = this.investimentoProvider.getById(this.navParams.get('idInvestimento'));
  }
}
