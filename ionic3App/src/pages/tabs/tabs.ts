import {Component} from '@angular/core';

// import { AboutPage } from '../about/about';

import {IndexPage} from '../index/index';
import {MakeWelcomePage} from '../make-welcome/make-welcome';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2Root = IndexPage;
  tab3Root = MakeWelcomePage;
  tab4Root = IndexPage;
  tab5Root = IndexPage;

  constructor() {

  }
}
