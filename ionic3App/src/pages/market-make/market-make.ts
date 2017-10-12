import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import{MarketMakeService} from './market.service'
import {OrderSurePage} from '../order-sure/order-sure';
/**
 * Generated class for the MarketMakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-make',
  templateUrl: 'market-make.html',
})
export class MarketMakePage {

  loading: any;
  topValue = ''
  bottomValue = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public marketMakeService: MarketMakeService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad MarketMakePage');
  }

  goOrder() {
    this.navCtrl.push(OrderSurePage, {state: 1})
  }

}
