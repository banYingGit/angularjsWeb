import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {MakePage} from '../make/make';
/**
 * Generated class for the MakeWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-welcome',
  templateUrl: 'make-welcome.html',
})
export class MakeWelcomePage {
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    // console.log('ionViewDidLoad MakeWelcomePage');
  }

  goMake() {
    this.navCtrl.push(MakePage)
  }
}
