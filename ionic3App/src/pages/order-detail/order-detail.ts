import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {OrderDetailService} from './order-detail.service';
import {PaymentPage} from '../payment/payment';
/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  userInfor = {}
  goods = []
  orderInfo = {}
  loading: any;
  headerData = {
    title: '订单详情',
    "isGoBack": true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderDetailService: OrderDetailService,
              public loadingCtrl: LoadingController) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();
    var $this = this;
    var dataUrl = './assets/data/orderDetails.json';
    var param = ''
    this.orderDetailService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.userInfor = data.userInfor;
        $this.goods = data.goods;
        $this.orderInfo = data.orderInfo;
        $this.loading.dismiss();
      });
  }

  //付款
  goPayment(totalAmount) {
    this.navCtrl.push(PaymentPage, {totalAmount: totalAmount})
  }

}
