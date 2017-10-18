import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {AddressListPage} from '../address-list/address-list';
import {InvoicePage} from '../invoice/invoice';
import {PaymentPage} from '../payment/payment';
/**
 * Generated class for the OrderSurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-sure',
  templateUrl: 'order-sure.html',
})
export class OrderSurePage {

  state = '';
  loading: any;
  user = {
    'name': 'Mr.zhang',
    'tel': '15631739055',
    'address': '广东省，深圳市，福田区',
    'addressDetail': '海滨广场',
    'default': true
  };
  goods = {
    'pic': '../../assets/icon/cur/img13.jpg',
    'title': '平安大吉满堂春',
    'color': '金色',
    'num': '1',
    'price': '1688'
  };
  make = {
    'topValue': '玉扣进口转印（¥900）',
    'bottomValue': '底座丝印（¥100）',
    'topText': '玉高山仰止,景行行止',
    'bottomText': '景行行止',

  };
  totalAmount = '2888';
  headerData = {
    "title": '确认订单',
    "isGoBack": true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    //state:1为定制过来的页面，0为普通商品过来的页面
    this.state = navParams.get('state');
    console.log('state:1为定制过来的页面，0为普通商品过来的页面', this.state)
    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSurePage');
    this.loading.present();
    this.loading.dismiss();
  }

  //跳转到地址列表页面->
  goAddress() {

    var param = {}
    this.navCtrl.push(AddressListPage, param)
  }

  //开具发票
  goInvoice() {
    this.navCtrl.push(InvoicePage)
  }

  //付款
  goPayment(totalAmount) {
    this.navCtrl.push(PaymentPage, {totalAmount: totalAmount})
  }


}
