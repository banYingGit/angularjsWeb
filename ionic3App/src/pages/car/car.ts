import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {CarService} from './car.service';
import {OrderSurePage} from '../order-sure/order-sure';
/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html'
})
export class CarPage {

  loading: any;
  listData = []
  isEdit = false
  isCs = false
  isAll = false
  numVal = '';
  totalAmount = '3880'
  headerData = {
    "title": '编辑地址',
    "isGoBack": true,
    "isShowRight": true,
    "btnText": "编辑",
    "btnFn": function () {
    }
  };

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

    //编辑按钮
    this.headerData.btnFn = function () {

      if ($this.isEdit) {

        $this.isEdit = false

        $this.headerData.btnText = '编辑'

      } else {

        $this.isEdit = true;

        $this.headerData.btnText = '保存'

        for (var i = 0; i < $this.listData.length; i++) {

          $this.numVal = $this.listData[i].num;

          console.log('this.numVal', $this.numVal)

        }
      }
    }

  }

  //全选
  chooseAll() {

    for (var i = 0; i < this.listData.length; i++) {


      if (this.isAll == false) {

        this.listData[i].isCs = false

      } else if (this.isAll == true) {

        this.listData[i].isCs = true

      }
    }

  }

//单选
  choose(items) {

    var $arr = [];

    for (var i = 0; i < this.listData.length; i++) {

      if (this.listData[i].isCs == false) {

        this.isAll = false

      } else {

        $arr.push(this.listData[i].isCs);

        this.isAll = $arr.length > i ? true : false

      }
    }
  }

  doEdit() {

  }

  goOrder() {
    this.navCtrl.push(OrderSurePage, {state: 0})
  }
}
