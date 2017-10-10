import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MakePage} from '../make/make';
/**
 * Generated class for the MakeWelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-make-welcome',
  templateUrl: 'make-welcome.html',
})
export class MakeWelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MakeWelcomePage');
  }

  goMake() {
    this.navCtrl.push(MakePage)
  }
}
