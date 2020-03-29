import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContasProvider } from '../../providers/contas/contas';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  account: {
    nome: string,
    email: string,
    senha: string,
    saldo: number,
    investimentos: [{}]
  } = {
    nome: "",
    email: "",
    senha: "",
    saldo: 1000000,
    investimentos: [{}]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public contas: ContasProvider, public toastCtrl: ToastController) {
  }

  doSignup(){
    this.contas.insert(this.account);
    this.navCtrl.push(HomePage);

    let toast = this.toastCtrl.create({
      message: "Conta criada com sucesso!",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
