import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';

/**
 * Generated class for the LetterOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-letter-out',
  templateUrl: 'letter-out.html',
})
export class LetterOutPage {

  chooseVal1=''
  chooseVal2=''
  chooseVal3=''
  chooseVal4=''
  chooseVal5=''
  chooseVal6=''
  chooseVal7=''
  chooseVal8=''
  chooseVal9=''
  chooseVal10=''
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LetterOutPage');
  }

}
