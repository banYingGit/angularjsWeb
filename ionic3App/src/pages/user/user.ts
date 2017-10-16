import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {UserService} from './user.service';
import {AddressListPage} from '../address-list/address-list';
import {UserSetPage} from '../user-set/user-set';
import {OrderListPage} from '../order-list/order-list';
import {UserMessagePage} from '../user-message/user-message';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userInfor = {}
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,) {

    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {
    this.loading.present();

    var $this = this;
    var dataUrl = './assets/data/user.json';
    var param = ''
    this.userService
      .getData(dataUrl, param)
      .then(function (data) {
        $this.userInfor = data.items;

        $this.loading.dismiss();
      });


    console.log('ionViewDidLoad UserPage');
  }

  //跳转到消息
  goMes() {
    this.navCtrl.push(UserMessagePage, {})
  }
  //跳转到地址列表页面->
  goAddress() {
    this.navCtrl.push(AddressListPage, {})
  }

  //跳转用户设置->
  goSet() {
    this.navCtrl.push(UserSetPage, {})
  }
  //  //跳转订单列表
  goOrderList(){
    this.navCtrl.push(OrderListPage, {})
  }


}
