import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';

/**
 * Generated class for the UserSetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-set',
  templateUrl: 'user-set.html',
})
export class UserSetPage {

  loading: any;
  headerData = {
    title: '个人设置',
    "isGoBack": true
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }
  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad UserSetPage');
  }

}
