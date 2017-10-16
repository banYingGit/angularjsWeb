import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {UserMessageService} from './user-message.service';

/**
 * Generated class for the UserMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-message',
  templateUrl: 'user-message.html',
})
export class UserMessagePage {

  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public userMessageService: UserMessageService) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    this.loading.dismiss();
    console.log('ionViewDidLoad UserMessagePage');
  }

}
