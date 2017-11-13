import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the CommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commission',
  templateUrl: 'commission.html',
})
export class CommissionPage {

  loading: any;
  headerData = {
    "title": '佣金明细',
    "isGoBack": true,
    "isShowRight": true,
    "btnText": "筛选",
    "btnFn": function () {

    }
  };
  isSearch = false
  YDate = ''
  MDate = ''
  DDate = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    var $this=this
    this.loading.present();
    this.loading.dismiss();
    this.headerData.btnFn = function () {
      $this.isSearch = true
    }

  }

}
