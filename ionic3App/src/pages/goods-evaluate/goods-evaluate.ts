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
  goodsId = ''
  loading: any;
  listData = []
  pageNum = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public goodsEvaluateService: GoodsEvaluateService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
    this.goodsId = navParams.get('id');
    console.log('this.goodsId------', this.goodsId)
  }

  ionViewDidLoad() {
    this.loading.present();

    var $this = this;
    this.listGet(1, this.goodsId, function () {
      $this.loading.dismiss();
    })

    console.log('ionViewDidLoad GoodsEvaluatePage');
  }


  listGet(page, id, fn) {
    var $this = this;
    var dataUrl = './assets/data/goodsEvaluate.json';
    var param = {"page": page, "id": id}
    this.goodsEvaluateService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.listData = $this.listData.concat(data.itemsObj);
        fn && fn.call($this)

      });
  }

  /*刷新获取*/
  doRefresh(refresher) {
    this.pageNum = this.pageNum + 1;
    this.listGet(this.pageNum, this.goodsId, function () {
      refresher.complete();
    })
  }
}
