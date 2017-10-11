import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MarketPage} from './market';

@NgModule({
  declarations: [
    MarketPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPage),
  ],
})
export class MarketPageModule {
  itemsObj: Array<ObjectModule>;
  itemsList: Array<ObjectModule>;
  items: Array<ObjectModule>
}
export class ObjectModule {
  proImg: string;
  title: string;
  id: string;
  price: string;
  priceOld: string;
}
