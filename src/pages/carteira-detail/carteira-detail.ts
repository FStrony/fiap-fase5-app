import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Investimento } from '../../models/investimento';
import { InvestimentosProvider } from '../../providers/investimentos/investimentos';
import { CarteiraProvider } from '../../providers/carteira/carteira';
import { DashboardPage } from '../dashboard/dashboard';

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
  contaId: number = null;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public investimentoProvider: InvestimentosProvider,
    public carteiraProvider: CarteiraProvider,
    public toastCtrl: ToastController) {
  }

  ionViewWillEnter() { 
    this.valorInvestido = this.navParams.get('valorInvestido');
    this.investimento = this.investimentoProvider.getById(this.navParams.get('idInvestimento'));
    this.contaId = this.navParams.get('contaId');
  }

  resgatar(){
    this.carteiraProvider.withdraw(this.valorInvestido, this.contaId, this.investimento.id);
    this.navCtrl.push(DashboardPage, { id: this.contaId });

    let toast = this.toastCtrl.create({
      message: "Investimento resgatado com sucesso!",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
