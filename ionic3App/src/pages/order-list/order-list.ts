import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {OrderListService} from './order-list.service';
import {OrderDetailPage} from '../order-detail/order-detail';
import {PaymentPage} from '../payment/payment';
import {EvaluatePage} from '../evaluate/evaluate';
/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  listData = []
  isTabActive = '1'
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
              public orderListService: OrderListService,) {
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {

    this.loading.present();

    var $this = this

    this.getData('1', function () {
      $this.loading.dismiss();
    })


  }

  getData(state, fn) {

    //orderState(订单状态) : 1等待买家付款  2买家已付款  3卖家已发货  4交易成功 >> 一共4种

    //state(tab选项) : 1全部 2待付款  3生产中  4待收货  5待评价 >> 一共5种


    var $this = this;

    var dataUrl = './assets/data/orderList.json';
    this.orderListService
      .getData(dataUrl, {state: state})
      .then(function (data) {
        $this.listData = data.items;
        fn && fn.call($this);
      });
  }

  changeData(stata) {
    var $this = this;
    this.getData('stata', function () {
      $this.isTabActive = stata
    })
  }
  goOrderDetail() {
    this.navCtrl.push(OrderDetailPage);
  }
  //付款
  goPayment(totalAmount) {
    this.navCtrl.push(PaymentPage, {totalAmount: totalAmount})
  }

  goEvaluate() {
    this.navCtrl.push(EvaluatePage)
  }

}
