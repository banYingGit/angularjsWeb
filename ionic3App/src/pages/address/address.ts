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

  }

  ionViewDidLoad() {

    this.loading.present();
    this.loading.dismiss();
  }

  //保存
  doSave() {
    var param = {}
    this.navCtrl.push(AddressListPage, param)

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

//返回上一页
  goBack() {

    var $this = this;

    var confirm = this.alertCtrl.create({
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

            $this.navCtrl.pop()
          }
        }
      ]
    });
    confirm.present();


  }
}
