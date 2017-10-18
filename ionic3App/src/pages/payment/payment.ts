import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {OrderPromptPage} from '../order-prompt/order-prompt';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  loading: any;
  totalAmount = '';
  payWay = ''
  headerData = {
    title: '收银台',
    "isGoBack": true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();

    this.totalAmount = navParams.get('totalAmount');
    console.log('付款总金额', this.totalAmount)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.loading.present();
    this.loading.dismiss();
  }

  goOrderPrompt() {

    this.navCtrl.push(OrderPromptPage);
  }

}
