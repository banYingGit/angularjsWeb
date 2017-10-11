import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Slides} from 'ionic-angular';
import {MarketService} from './market.service';

import {GoodsDetailsPage} from '../goods-details/goods-details';
/**
 * Generated class for the MarketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  @ViewChild(Slides) slides: Slides;
  tabBarData = [{}];
  slidesImg = []
  listData = []
  loading: any;
  isTabActive = ''
  pageNum = 1;
  isShowSlide = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public marketService: MarketService, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {

    this.loading.present();
    var $this = this;
    /*获取tab标签*/
    var tabBarUrl = './assets/data/index/tabBar.json';
    this.marketService
      .getData(tabBarUrl, '')
      .then(function (data) {
        $this.tabBarData = data.itemsObj;
        /*获取列表内容*/
        $this.listGet((data.itemsObj)[0].id, 1, '')
      });

    this.loading.dismiss();
    console.log('ionViewDidLoad MarketPage');
  }

  listGet(id, page, fn) {

    var $this = this;
    /*点击获取列表内容*/
    var listUrl = './assets/data/market.json';
    var param = {"page": page, "id": id}
    this.marketService
      .getData(listUrl, param)
      .then(function (data) {
        fn && fn.call($this);
        $this.slidesImg = data.items;
        $this.listData = $this.listData.concat(data.itemsList);
        $this.isTabActive = id;
        $this.pageNum = page;
        console.log('当前分页', page)
      });
  }

  /*刷新获取*/
  doRefresh(refresher) {
    this.pageNum = this.pageNum + 1;
    this.listGet(this.isTabActive, this.pageNum, function () {
      refresher.complete();
    })
  }

  /*点击获取*/
  clickGet(id) {
    var $this = this;
    this.listGet(id, 1, function () {
      $this.listData = []
      $this.isShowSlide = false
    })
  }

  /*弹出点击获取*/
  clickPopGet(id, index) {
    var $this = this;
    this.listGet(id, 1, function () {
      $this.listData = []
      $this.isShowSlide = false
      $this.goToSlide(index)
    })
  }

  /*设置slides 当前焦点*/
  goToSlide(index) {
    this.slides.slideTo(index, 500);
  }

  goDetail(id) {
    this.navCtrl.push(GoodsDetailsPage, {"id": id});
  }

}
