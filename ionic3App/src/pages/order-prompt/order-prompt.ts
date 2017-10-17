import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {OrderPromptService} from './order-prompt.service';
import {OrderDetailPage} from '../order-detail/order-detail';
/**
 * Generated class for the OrderPromptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-prompt',
  templateUrl: 'order-prompt.html',
})
export class OrderPromptPage {

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderPromptService: OrderPromptService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad OrderPromptPage');
  }

  goOrderDetail() {
    this.navCtrl.push(OrderDetailPage);
  }
}
