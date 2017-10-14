import {Component} from '@angular/core';

import {IndexPage} from '../index/index';
import {MakeWelcomePage} from '../make-welcome/make-welcome';
import {MarketPage} from '../market/market';
import {CarPage} from '../car/car';
import {UserPage} from '../user/user';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2Root = MarketPage;
  tab3Root = MakeWelcomePage;
  tab4Root = CarPage;
  tab5Root = UserPage;

  constructor() {

  }
}
