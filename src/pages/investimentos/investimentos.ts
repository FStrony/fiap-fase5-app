import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Investimento } from '../../models/investimento';
import { InvestimentosProvider } from '../../providers/investimentos/investimentos';
import { InvestimentoDetailPage } from '../investimento-detail/investimento-detail';

/**
 * Generated class for the InvestimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-investimentos',
  templateUrl: 'investimentos.html',
})
export class InvestimentosPage {
  contaId: number = null;
  investimentos: Array<Investimento> = new Array<Investimento>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public investimentosProvider: InvestimentosProvider) {
    this.investimentos = this.investimentosProvider.listAll();
  }

  ionViewWillEnter() {
    this.contaId = this.navParams.get('id')    
  }

  openItem(item: Investimento) {
    this.navCtrl.push(InvestimentoDetailPage, {investientoId: item.id, contaId: this.contaId});
  }
}
