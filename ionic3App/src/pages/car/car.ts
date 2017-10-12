import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {CarService} from './car.service';
/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {

  loading: any;
  listData = []
  isEdit = false
  a = ''
  b = ''
  c = ''
  allse = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public carService: CarService) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {

    this.loading.present();

    var $this = this;
    /*点击获取列表内容*/
    var listUrl = './assets/data/car.json';
    var param = {}
    this.carService
      .getData(listUrl, param)
      .then(function (data) {
        $this.listData = data.itemsObj;
        $this.loading.dismiss();
      });

  }

  allSelect(val) {
    this.allse = [this.a, this.b, this.c]
  }

  doEdit() {

    if (this.isEdit) {
      this.isEdit = false
    } else {
      this.isEdit = true
    }
    console.log('this.isEdit', this.isEdit)
  }
}
