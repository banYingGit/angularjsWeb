import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GoodsDetailsPage} from './goods-details';

@NgModule({
  declarations: [
    GoodsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsDetailsPage),
  ],
})
export class GoodsDetailsPageModule {
  slideList: Array<string>;
  title: string;
  price: string;
  num: string;
  type: string;
  spec: string;
  material: string;
  color: string;
  brand: string;
  production: string;
  detail: object
}
