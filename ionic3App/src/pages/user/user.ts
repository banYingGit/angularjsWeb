import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {UserService} from './user.service';
import {AddressListPage} from '../address-list/address-list';
import {UserSetPage} from '../user-set/user-set';
import {OrderListPage} from '../order-list/order-list';
import {UserMessagePage} from '../user-message/user-message';
import {LoginPage} from '../login/login';
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

  userState: any
  userInfor = {}
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public userService: UserService,
              public alertCtrl: AlertController) {

    this.userState = '0' //1 为登录  0是未登录
    this.loading = this.loadingCtrl.create();

    if (this.userState = '0') {
      this.navCtrl.push(LoginPage)
    }
  }

  ionViewDidLoad() {
    this.loading.present();

    var $this = this;
    var dataUrl = './assets/data/user.json';
    var param = '';
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

  // 跳转订单列表
  goOrderList() {
    this.navCtrl.push(OrderListPage, {})
  }

  // 拨打电话
  doTel() {

    var $this = this;

    var confirm = this.alertCtrl.create({
      title: '拨打电话',
      message: '您确定拨打：400-047-1888',
      buttons: [
        {
          text: '取消',
          handler: function () {
          }
        },
        {
          text: '确认',
          handler: function () {

            var param = {};

            $this.navCtrl.push(AddressListPage, param)
          }
        }
      ]
    });
    confirm.present();
  }


}
