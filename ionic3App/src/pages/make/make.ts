import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {MakeResultPage} from '../make-result/make-result';
/**
 * Generated class for the MakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make',
  templateUrl: 'make.html',
})
export class MakePage {
  loading: any;
  gender = 'male'
  purpose = ''
  culture1 = ''
  culture2 = ''
  culture3 = ''
  culture4 = ''
  culture5 = ''
  MDYDate = ''
  HDate = ''
  mDate = ''
  headerData = {
    "title": '高端定制',
    "isShowRight": true,
    "btnText": "神秘信",
    "btnFn": function () {
      console.log('OO～神秘信不知道这个干什么呢！！')
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
  }

  changeCheck() {
    console.log('Cucumbers new culture1:' + this.culture1);
    console.log('Cucumbers new culture2:' + this.culture2);
    console.log('Cucumbers new culture3:' + this.culture3);
  }

  goResult() {
    this.navCtrl.push(MakeResultPage)
  }


}
