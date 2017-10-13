import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {AddressListService} from './address-list.service';
import {OrderSurePage} from '../order-sure/order-sure';
import {AddressPage} from '../address/address';
/**
 * Generated class for the AddressListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-list',
  templateUrl: 'address-list.html',
})
export class AddressListPage {

  loading: any;
  listdata = []


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public addressListService: AddressListService) {

    this.loading = this.loadingCtrl.create();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressListPage');
    this.loading.present();

    var $this = this;

    var dataUrl = './assets/data/addressList.json';
    this.addressListService
      .getData(dataUrl, '')
      .then(function (data) {

        $this.listdata = data.itemsObj;
        $this.loading.dismiss();
      });

  }

  choose(items) {
    var param = {user: items};
    this.navCtrl.push(OrderSurePage, param)
  }

  goEdit(data) {

    var param = {
      addressState: 0,
      id: data.id,
      name: data.name,
      tel: data.tel,
      address: data.address,
      addressDetail: data.addressDetail,
      default: data.default
    };
    this.navCtrl.push(AddressPage, param)
  }

  goAdd() {
    var param = {
      addressState: 1,
      id: '',
      name: '',
      tel: '',
      address: '',
      addressDetail: '',
      default: '',
    };
    this.navCtrl.push(AddressPage, param)
  }
}
