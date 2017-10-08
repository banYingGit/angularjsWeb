import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Slides} from 'ionic-angular';
import {NewsListPage} from '../news-list/news-list';
import {ChannelListPage} from '../channel-list/channel-list';
import {MasterDetailsPage} from '../master-details/master-details';

import 'rxjs/Rx';
import {IndexService} from './index.service';

@IonicPage()

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  bannerData = [''];
  newsData = [];
  tabBarData = [{}];
  tabConData = [];
  listData = [];
  themeData = [];
  loading: any;
  isTabActive = ''
  // index: IndexPageModule = new IndexPageModule();
  pageNum = 1;

  @Component(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public indexService: IndexService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {

    this.loading.present();
    var $this = this;

    /*获取banner*/
    var bannerUrl = './assets/data/index/banner.json';
    this.indexService
      .getData(bannerUrl, '')
      .then(function (data) {
        $this.bannerData = data.items;
      });

    /*获取主题站*/
    var themeUrl = './assets/data/index/theme.json';
    this.indexService
      .getData(themeUrl, '')
      .then(function (data) {
        $this.themeData = data.itemsObj;
      });

    /*获取头条*/
    var newsUrl = './assets/data/index/news.json';
    this.indexService
      .getData(newsUrl, '')
      .then(function (data) {
        $this.newsData = data.itemsObj;
      });

    /*获取tab标签*/
    var tabBarUrl = './assets/data/index/tabBar.json';
    this.indexService
      .getData(tabBarUrl, '')
      .then(function (data) {
        $this.tabBarData = data.itemsObj;
        /*获取tab卡片*/
        $this.tabConGet((data.itemsObj)[0].id)
      });

    this.listGet('1', '')
    this.loading.dismiss();

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
        $this.listData = $this.listData.concat(data.itemsObj);
        fn && fn.call(this)
      });

  }

  doRefresh(refresher) {
    this.pageNum = this.pageNum + 1;
    console.log('当前分页', this.pageNum)
    this.listGet(this.pageNum, function () {
      refresher.complete();
    })
  }

  /*页面跳转*/
  goNewsPage(id) {
    this.navCtrl.push(NewsListPage, id);
  }

  goChannelPage(id) {
    this.navCtrl.push(ChannelListPage, id);
  }

  goMasterPage(id) {
    this.navCtrl.push(MasterDetailsPage, id)

  }
}
