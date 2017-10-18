import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import{GoodsDetailsService} from './goods-details.service'
import {MarketMakePage} from '../market-make/market-make';
import {GoodsEvaluatePage} from '../goods-evaluate/goods-evaluate';
import {GoodsPropertyPage} from '../goods-property/goods-property';

@IonicPage()
@Component({
  selector: 'page-goods-details',
  templateUrl: 'goods-details.html',
})
export class GoodsDetailsPage {

  goodsId = '';
  loading: any;
  slideList = [];
  title = '';
  price = '';
  num = '';
  type = '';
  spec = '';
  material = '';
  color = '';
  brand = '';
  production = '';
  detail = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsDetailsService: GoodsDetailsService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    this.loading = this.loadingCtrl.create();

    this.goodsId = navParams.get('id');
    console.log('this.goodsId', this.goodsId)

  }

  ionViewDidLoad() {
    this.loading.present();
    var $this = this;
    var dataUrl = './assets/data/GoodsDetails.json';
    var param = ''
    this.goodsDetailsService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.slideList = data.slideList;
        $this.title = data.title
        $this.price = data.price
        $this.num = data.num
        $this.type = data.type
        $this.spec = data.spec
        $this.material = data.material
        $this.color = data.color
        $this.brand = data.brand
        $this.production = data.production
        $this.detail = data.detail
        $this.loading.dismiss();
      });

  }

  goMake() {
    this.navCtrl.push(MarketMakePage)
  }

  goEvaluate() {
    this.navCtrl.push(GoodsEvaluatePage, {id: this.goodsId})
  }

  goProperty() {
    this.navCtrl.push(GoodsPropertyPage, {id: this.goodsId})
  }

  addCar() {
    let toast = this.toastCtrl.create({
      message: '添加成功',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  goBack(){
    this.navCtrl && this.navCtrl.pop(null, null);
  }

}
