import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  loading: any;
  headerData = {
    "title": '发票信息',
    "isGoBack": true,
    "isShowRight": true,
    "btnText": "确定",
    "btnFn": function () {
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
    this.loading.present();
    this.loading.dismiss();
    //确定按钮
    this.headerData.btnFn = function () {

      console.log('发票确认')

    }
  }

}
