import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';

/**
 * Generated class for the LetterIntoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-letter-into',
  templateUrl: 'letter-into.html',
})
export class LetterIntoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LetterIntoPage');
  }

}
