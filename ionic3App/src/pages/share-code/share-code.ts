import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';

/**
 * Generated class for the ShareCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-code',
  templateUrl: 'share-code.html',
})
export class ShareCodePage {

  loading: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }
  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad ShareCodePage');
  }

  goBack(){
    this.navCtrl && this.navCtrl.pop(null, null);
  }


}
