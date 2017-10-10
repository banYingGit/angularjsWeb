import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import{GoodsPropertyService} from './goods-property.service'
/**
 * Generated class for the GoodsPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods-property',
  templateUrl: 'goods-property.html',
})
export class GoodsPropertyPage {
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsPropertyService: GoodsPropertyService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad GoodsPropertyPage');
  }

}
