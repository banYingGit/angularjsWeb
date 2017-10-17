import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {SystemMessageService} from './system-message.service';
/**
 * Generated class for the SystemMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-system-message',
  templateUrl: 'system-message.html',
})
export class SystemMessagePage {

  listData = []
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public systemMessageService: SystemMessageService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();


    var $this = this;

    var dataUrl = './assets/data/SystemMessage.json';
    this.systemMessageService
      .getData(dataUrl, '')
      .then(function (data) {

        $this.listData = data.items;
        $this.loading.dismiss();
      });
  }

}
