import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MakeResultService} from './make-resule.service';
/**
 * Generated class for the MakeResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-result',
  templateUrl: 'make-result.html',
})
export class MakeResultPage {

  initData = {}
  listData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public makeResultService: MakeResultService,) {
  }

  ionViewDidLoad() {

    var $this = this;
    /*点击获取列表内容*/
    var url = './assets/data/makeResult.json';
    var param = {}
    this.makeResultService
      .getData(url, param)
      .then(function (data) {
        $this.initData = data.itemsObj;
        $this.listData = data.listData;
        console.log('$this.initData', $this.initData)
      });

  }

}
