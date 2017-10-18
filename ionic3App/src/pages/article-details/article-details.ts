import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {ArticleDetailsService} from './article-details.service';


@IonicPage()
@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {

  pageId = '';
  loading: any;
  detailData = {}
  proList = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public articleDetailsService: ArticleDetailsService,) {

    this.loading = this.loadingCtrl.create();
    this.pageId = navParams.get('id')
    console.log('this.pageId', this.pageId)
  }

  ionViewDidLoad() {
    this.loading.present();
    var $this = this;
    var param = {'id': this.pageId}
    var dataUrl = './assets/data/article-details/detail.json';
    this.articleDetailsService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.detailData = data.itemObj;
      });
    var listUrl = './assets/data/article-details/list.json';
    this.articleDetailsService
      .getData(listUrl, param)
      .then(function (data) {
        $this.proList = data.itemArr;
      });
    this.loading.dismiss();
  }

  goDetail(id) {
    console.log('>>>id', id)
    this.navCtrl.push(ArticleDetailsPage, {"id": id});
  }

  goBack(){
    this.navCtrl && this.navCtrl.pop(null, null);
  }

}
