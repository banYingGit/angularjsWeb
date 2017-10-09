import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Slides} from 'ionic-angular';
import {ArticleDetailsPage} from '../article-details/article-details';
import 'rxjs/Rx';
import {ChannelListService} from './channel-list.service';

@IonicPage()
@Component({
  selector: 'page-channel-list',
  templateUrl: 'channel-list.html',
})
export class ChannelListPage {

  @ViewChild(Slides) slides: Slides;

  tabBarData = [{}];
  listData = []
  loading: any;
  isTabActive = ''
  pageNum = 1;
  isShowSlide = false;

  // channelList: ChannelListPageModule = new ChannelListPageModule();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public channelListService: ChannelListService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();

    var $this = this;
    /*获取tab标签*/
    var tabBarUrl = './assets/data/index/tabBar.json';
    this.channelListService
      .getData(tabBarUrl, '')
      .then(function (data) {
        $this.tabBarData = data.itemsObj;
        /*获取列表内容*/
        $this.listGet((data.itemsObj)[0].id, 1, '')
      });

    this.loading.dismiss();
  }

  listGet(id, page, fn) {

    var $this = this;
    /*点击获取列表内容*/
    var listUrl = './assets/data/channelList.json';
    var param = {"page": page, "id": id}
    this.channelListService
      .getData(listUrl, param)
      .then(function (data) {
        fn && fn.call($this)
        $this.listData = $this.listData.concat(data.itemsObj);
        $this.isTabActive = id
        $this.pageNum = page
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
    this.navCtrl.push(ArticleDetailsPage, {"id": id});
  }
}

