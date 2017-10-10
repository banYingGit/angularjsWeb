import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import{GoodsDetailsService} from './goods-details.service'
/**
 * Generated class for the GoodsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods-details',
  templateUrl: 'goods-details.html',
})
export class GoodsDetailsPage {

  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsDetailsService: GoodsDetailsService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }
  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad GoodsDetailsPage');
  }

}
