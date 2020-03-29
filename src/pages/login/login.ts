import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContasProvider } from '../../providers/contas/contas';
import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: { email: string, senha: string } = {
    email: 'fiap@fiap.com.br',
    senha: '1234'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public contas: ContasProvider, public toastCtrl: ToastController) {
  }

  doLogin() {
    const conta = this.contas.login(this.account);
    if(conta){
      this.navCtrl.push(DashboardPage, { id: conta.id });

      let toast = this.toastCtrl.create({
        message: "Login realizado com sucesso!",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: "Não foi possível entrar na sua conta. Verifique seus dados e tente novamente.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
}
