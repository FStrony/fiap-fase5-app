import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContasProvider } from '../providers/contas/contas';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { InvestimentosProvider } from '../providers/investimentos/investimentos';
import { InvestimentosPage } from '../pages/investimentos/investimentos';
import { InvestimentoDetailPage } from '../pages/investimento-detail/investimento-detail';
import { CarteiraProvider } from '../providers/carteira/carteira';
import { CarteiraPage } from '../pages/carteira/carteira';
import { CarteiraDetailPage } from '../pages/carteira-detail/carteira-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    InvestimentosPage,
    InvestimentoDetailPage,
    CarteiraPage,
    CarteiraDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    InvestimentosPage,
    InvestimentoDetailPage,
    CarteiraPage, 
    CarteiraDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContasProvider,
    InvestimentosProvider,
    CarteiraProvider
  ]
})
export class AppModule {}
