import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {AddressChooseService} from './address-choose.service';
import {AddressPage} from '../address/address';
/**
 * Generated class for the AddressChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-choose',
  templateUrl: 'address-choose.html',
})
export class AddressChoosePage {

  id = ''
  cityPiker = '';
  listdata = []
  loading: any;

  addressState = ''
  name = '';
  tel = '';
  address = '';
  addressDetail = ''
  default = '';
  headerData = {
    title: '地址地区',
    "isGoBack": true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public addressChooseService: AddressChooseService) {

    this.loading = this.loadingCtrl.create();
    this.addressState = navParams.get('addressState');
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    this.tel = navParams.get('tel');
    // this.address = navParams.get('address');
    this.addressDetail = navParams.get('addressDetail');
    this.default = navParams.get('default');
    this.loading = this.loadingCtrl.create();
  }

  ionViewDidLoad() {

    this.loading.present();


    var cityUrl = './assets/data/province.json', $this = this;

    this.addressChooseService
      .getData(cityUrl, '')
      .then(function (data) {
        $this.listdata = data.itemsObj;
        $this.loading.dismiss();
      });


  }

  choose(data) {

    var $this = this;

    this.address = this.address + data.name + '，';

    if (data.child == true && data.level == '1') {

      var cityUrl = './assets/data/city.json',
        cityParam = {id: data.id};

      this.addressChooseService
        .getData(cityUrl, cityParam)
        .then(function (data) {

          $this.listdata = data.itemsObj;

        });

    }

    else if (data.child == true && data.level == '2') {

      var areaUrl = './assets/data/area.json',
        areaParam = {id: data.id};

      this.addressChooseService
        .getData(areaUrl, areaParam)
        .then(function (data) {

          $this.listdata = data.itemsObj;

        });

    } else if (data.child == false) {

      var param = {
        addressState: this.addressState,
        id: this.id,
        name: this.name,
        tel: this.tel,
        address: this.address,
        addressDetail: this.addressDetail,
        default: this.default
      };

      this.navCtrl.push(AddressPage, param)

    }

  }

}
