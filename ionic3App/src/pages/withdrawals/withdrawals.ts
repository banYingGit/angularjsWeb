import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {CommissionPage} from '../commission/commission';
/**
 * Generated class for the WithdrawalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdrawals',
  templateUrl: 'withdrawals.html',
})
export class WithdrawalsPage {
  loading: any;
  headerData = {
    "title": '佣金明细',
    "isGoBack": true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
  }
  goPage2(){
    this.navCtrl.push(CommissionPage)
  }
}
