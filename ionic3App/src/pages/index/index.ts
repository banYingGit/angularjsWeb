import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Slides} from 'ionic-angular';

import 'rxjs/Rx';
import {IndexPageModule} from './index.module';
import {IndexService} from './index.service';


@IonicPage()


@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  bannerData = [''];
  newsData = [''];
  tabBarData = [{}];
  tabConData = [];
  listData = []
  loading: any;
  isTabActive = ''
  index: IndexPageModule = new IndexPageModule();

  items = [];

  @Component(Slides) slides: Slides;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public indexService: IndexService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();

  }

  ionViewWillEnter() {

    // this.loading.present();
    // $this.loading.dismiss();


  }

  ionViewDidLoad() {

    var $this = this;

    /*获取banner*/
    var bannerUrl = './assets/data/index/banner.json';
    this.indexService
      .getData(bannerUrl, '')
      .then(function (data) {
        $this.bannerData = data.items;
      });

    /*获取头条*/
    var newsUrl = './assets/data/index/news.json';
    this.indexService
      .getData(newsUrl, '')
      .then(function (data) {
        $this.newsData = data.items;
      });

    /*获取tab标签*/
    var tabBarUrl = './assets/data/index/tabBar.json',
      $w = document.body.clientWidth;
    this.indexService
      .getData(tabBarUrl, '')
      .then(function (data) {
        $this.tabBarData = data.itemsObj;
        /*获取tab卡片*/
        $this.tabConGet((data.itemsObj)[0].id)
      });

    this.listGet('1', '')
  }

  tabConGet(id) {

    var $this = this;
    /*点击获取tab卡片*/
    var tabConUrl = './assets/data/index/tabCon.json';
    this.indexService
      .getData(tabConUrl, '')
      .then(function (data) {
        $this.tabConData = data.itemsObj;
        $this.isTabActive = id
        console.log('$this.isTabActive>>>', $this.isTabActive)
      });
  }

  listGet(page, fn) {
    var $this = this;
    /*获取list列表内容*/
    var listUrl = './assets/data/index/list.json';
    this.indexService
      .getData(listUrl, page)
      .then(function (data) {
        $this.listData = data.itemsObj;
        fn && fn.call(this)
      });

  }

  doRefresh(refresher) {

    for (let i = 0; i < 10; i++) {
      this.items.push(this.items.length);
    }

    console.log('》》》》》》》', refresher);

    console.log('this.items', this.items)

    // setTimeout(function () {
    //
    // }, 2000)
    this.listGet('1', function () {

      refresher.complete();

    })


  }

}
