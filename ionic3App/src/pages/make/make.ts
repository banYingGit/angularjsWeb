import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make',
  templateUrl: 'make.html',
})
export class MakePage {

  gender = 'male'
  purpose = ''
  culture1 = ''
  culture2 = ''
  culture3 = ''
  culture4 = ''
  culture5 = ''
  MDYDate = ''
  HDate = ''
  mDate = ''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakePage');
  }

  changeCheck() {
    console.log('Cucumbers new culture1:' + this.culture1);
    console.log('Cucumbers new culture2:' + this.culture2);
    console.log('Cucumbers new culture3:' + this.culture3);
  }

}
