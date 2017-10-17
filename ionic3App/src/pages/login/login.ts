import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {UserPage} from '../user/user';
import {RegisterPage} from '../register/register';
import {IndexPage} from '../index/index';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  tel = ''
  password = ''
  loading: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {

    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {

    if (this.tel != '' && this.password != '') {
      this.navCtrl.push(UserPage);
    } else {

      let toast = this.toastCtrl.create({
        message: '输入错误',
        duration: 3000
      });
      toast.present();
    }
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goIndex() {
    // this.navCtrl.push(IndexPage);
  }


}
