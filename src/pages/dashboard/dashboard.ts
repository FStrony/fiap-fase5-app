import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContasProvider } from '../../providers/contas/contas';
import { Conta } from '../../models/conta';
import { InvestimentosPage } from '../investimentos/investimentos';
import { CarteiraPage } from '../carteira/carteira';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  account: Conta = new Conta(null, null,null, null,null);
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public contas: ContasProvider) {
  }

  ionViewWillEnter() {
    const id = this.navParams.get('id')
    if(id) {
      this.account = this.contas.getContaById(id);
    }
  }

  carteira() {
    this.navCtrl.push(CarteiraPage, { contaId: this.account.id });
  }

  investir() {
    this.navCtrl.push(InvestimentosPage, {id: this.account.id});
  }
}
