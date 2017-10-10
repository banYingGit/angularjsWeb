import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import{GoodsEvaluateService} from './goods-evaluate.service'
/**
 * Generated class for the GoodsEvaluatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods-evaluate',
  templateUrl: 'goods-evaluate.html',
})
export class GoodsEvaluatePage {

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsEvaluateService: GoodsEvaluateService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad GoodsEvaluatePage');
  }

}
