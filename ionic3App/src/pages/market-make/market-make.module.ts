import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MarketMakePage} from './market-make';
@NgModule({
  declarations: [
    MarketMakePage,
  ],
  imports: [
    IonicPageModule.forChild(MarketMakePage),
  ],
})
export class MarketMakePageModule {
}
