import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Investimento } from '../../models/investimento';
import { Conta } from '../../models/conta';
import { ContasProvider } from '../../providers/contas/contas';
import { InvestimentosProvider } from '../../providers/investimentos/investimentos';
import { CarteiraProvider } from '../../providers/carteira/carteira';
import { CarteiraInvestimento } from '../../models/carteiraInvestimentos';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the InvestimentoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-investimento-detail',
  templateUrl: 'investimento-detail.html',
})
export class InvestimentoDetailPage {

  investimento: Investimento = new Investimento(null,null,null,null,null,null);
  account: Conta = new Conta(null,null,null,null,null);
  valor: number = null;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public contaProvider: ContasProvider, 
    public investimentoProvider: InvestimentosProvider,
    public carteiraProvider: CarteiraProvider,
    public toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.account = this.contaProvider.getContaById(this.navParams.get('contaId'));   
    this.investimento = this.investimentoProvider.getById(this.navParams.get('investientoId'));
  }

  investir(){
    if(this.valor > 0){
      if(this.account.saldo >= this.valor){
        let carteira: CarteiraInvestimento = new CarteiraInvestimento(this.valor, this.account, this.investimento);
        this.carteiraProvider.insert(carteira);
        this.contaProvider.debitarById(this.account.id, this.valor);
        this.navCtrl.push(DashboardPage, { id: this.account.id });

        let toast = this.toastCtrl.create({
          message: "Investimento realizado com sucesso!",
          duration: 3000,
          position: 'top'
        });  
        toast.present();      
      } else{
        let toast = this.toastCtrl.create({
          message: "Saldo insuficiente!",
          duration: 3000,
          position: 'top'
        });  
        toast.present();     
      }      
    }else{
      let toast = this.toastCtrl.create({
        message: "Não foi possível realizar o investimento. Verifique os dados e tente novamente.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
}
