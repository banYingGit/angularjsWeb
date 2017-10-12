import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  state = ''
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    //state:1为新建过来的页面，0为编辑过来的页面
    this.state = navParams.get('state');
    console.log('state:1为新建过来的页面，0为编辑过来的页面', this.state)

    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
    this.loading.present();
    this.loading.dismiss();
  }

}
