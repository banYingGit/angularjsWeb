import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  loading: any;
  totalAmount = '';
  payWay = ''

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

}
