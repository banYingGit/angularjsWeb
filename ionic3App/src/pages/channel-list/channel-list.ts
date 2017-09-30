import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

import 'rxjs/Rx';
import {ChannelListPageModule} from './channel-list.module';
import {ChannelListService} from './channel-list.service';

@IonicPage()
@Component({
  selector: 'page-channel-list',
  templateUrl: 'channel-list.html',
})
export class ChannelListPage {

  tabBarData = [{}];
  listData = []
  loading: any;
  isTabActive = ''
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
        $this.ListGet((data.itemsObj)[0].id)
      });

    this.loading.dismiss();
  }

  ListGet(id) {

    var $this = this;
    /*点击获取列表内容*/
    var listUrl = './assets/data/channelList.json';
    this.channelListService
      .getData(listUrl, '')
      .then(function (data) {
        $this.listData = data.itemsObj;
        $this.isTabActive = id

      });
  }

}
