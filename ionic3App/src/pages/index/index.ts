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
  tabBarP = {};
  tabBar = {};
  indexData = {};
  loading: any;
  index: IndexPageModule = new IndexPageModule();

  @Component(Slides) slides: Slides;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public indexService: IndexService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();

  }

  ionViewWillEnter() {

    this.loading.present();
    var $this = this;
    /*获取banner*/
    var bannerUrl = './assets/data/index/banner.json'
    this.indexService
      .getData(bannerUrl)
      .then(function (data) {
        $this.bannerData = data.images;
        console.log('$this.bannerData ', $this.bannerData)
        $this.loading.dismiss();
        // $this.slides.loop = true;
      });

  }

  ionViewDidLoad() {


    var $w = document.body.clientWidth;

    this.tabBarP = {
      width: $w / 4 + 'px'
    };
    this.tabBar = {
      width: $w / 4 * 6 + 'px'
    };


  }

}
