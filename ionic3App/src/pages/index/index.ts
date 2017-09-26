import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Slides} from 'ionic-angular';


/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {


  @Component(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  tabBarP = {}
  tabBar = {}

  ionViewDidLoad() {

    var $w = document.body.clientWidth;

    this.tabBarP = {
      width: $w / 4 + 'px'
    };
    this.tabBar = {
      width: $w / 4 * 6 + 'px'
    };


  }

  // goToSlide() {
  //   this.slides.slideTo(2, 500);
  // }
}
