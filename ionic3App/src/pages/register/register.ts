import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  invitation = ''
  code = ''
  tel = ''
  password = ''
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad RegisterPage');
  }

  doLogin() {

    this.navCtrl.push(LoginPage)
  }

}
