import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {AddressChoosePage} from '../address-choose/address-choose';
import {AddressListPage} from '../address-list/address-list';
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  addressState = '';
  loading: any;
  id = '';
  name = '';
  tel = '';
  address = '';
  addressDetail = '';
  default = '';
  headerData = {
    "title": '',
    "isGoBack": false,
    "goBackFn": function () {
    },
    "isShowRight": true,
    "btnText": "保存",
    "btnFn": function () {

    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

    //state:1为新建过来的页面，0为编辑过来的页面
    this.addressState = navParams.get('addressState');
    console.log('adressState:1为新建过来的页面，0为编辑过来的页面', this.addressState)
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    this.tel = navParams.get('tel');
    this.address = navParams.get('address');
    this.addressDetail = navParams.get('addressDetail');
    this.default = navParams.get('default');
    this.loading = this.loadingCtrl.create();
    if(this.addressState=='1'){

      this.headerData.title='新建地址'

    }else if(this.addressState=='0'){

      this.headerData.title='编辑地址'

    }


  }

  ionViewDidLoad() {

    this.loading.present();
    this.loading.dismiss();
    var $this = this;

    //返回上一页
    this.headerData.goBackFn = function () {

      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>MMM')
      var confirm = $this.alertCtrl.create({
        title: '',
        message: '是否取消编辑？',
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
    //保存按钮
    this.headerData.btnFn = function () {
      $this.navCtrl.push(AddressListPage, {})
    }
  }


  //选择地址
  goChooseAdress() {

    var param = {
      addressState: this.addressState,
      id: this.id,
      name: this.name,
      tel: this.tel,
      address: this.address,
      addressDetail: this.addressDetail,
      default: this.default
    };

    this.navCtrl.push(AddressChoosePage, param)

  }

}
