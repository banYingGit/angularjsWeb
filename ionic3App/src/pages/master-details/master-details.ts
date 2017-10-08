import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {MasterDetailsService} from './master-details.service';

@IonicPage()
@Component({
  selector: 'page-master-details',
  templateUrl: 'master-details.html',
})
export class MasterDetailsPage {

  containShow = 'A';
  loading: any;
  userInfor = {}
  proList = []
  infor1 = ""
  infor2 = ""


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public masterDetailsService: MasterDetailsService,
              public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();

    var $this = this;
    var dataUrl = './assets/data/masterDetail.json';
    var param = ''
    this.masterDetailsService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.userInfor = data.userInfor;
        $this.proList = data.proList;
        $this.infor1 = data.infor1;
        $this.infor2 = data.infor2;
        $this.loading.dismiss();
      });
  }

  changeCon(id) {
    console.log('>>>>>>>>>>', id)
    this.containShow = id

  }

}
