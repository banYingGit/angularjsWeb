import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GoodsPropertyPage} from './goods-property';

@NgModule({
  declarations: [
    GoodsPropertyPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsPropertyPage),
  ],
})
export class GoodsPropertyPageModule {
  items: Array<string>
}
