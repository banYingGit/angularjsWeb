import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {NewsListService} from './news-list.service';

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
})
export class NewsListPage {

  listData = []
  loading: any;
  pageNum = 1;
  headerData = {
    "title": '唐朝头条',
    "isGoBack": true
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public newsListService: NewsListService,
              public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    var $this = this;
    this.loading.present();
    this.listGet(1, function () {
      $this.loading.dismiss();
    })
  }

  listGet(page, fn) {
    var $this = this;
    /*点击获取列表内容*/
    var listUrl = './assets/data/newsList.json';
    var param = {"page": page}
    this.newsListService
      .getData(listUrl, param)
      .then(function (data) {
        $this.listData = $this.listData.concat(data.itemsObj);
        fn && fn.call($this)
      });
  }

  /*刷新获取*/
  doRefresh(refresher) {
    this.pageNum = this.pageNum + 1;
    this.listGet(this.pageNum, function () {
      refresher.complete();
    })
  }
}
