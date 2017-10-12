import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the OrderSurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-sure',
  templateUrl: 'order-sure.html',
})
export class OrderSurePage {

  state = ''
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    //state:1为定制过来的页面，0为普通商品过来的页面
    this.state = navParams.get('state');
    console.log('state:1为定制过来的页面，0为普通商品过来的页面', this.state)
    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSurePage');
    this.loading.present();
    this.loading.dismiss();
  }

}
