import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {OrderDetailService} from './order-detail.service';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderDetailService: OrderDetailService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad OrderDetailPage');
  }

}
