import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GoodsEvaluatePage} from './goods-evaluate';

@NgModule({
  declarations: [
    GoodsEvaluatePage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsEvaluatePage),
  ],
})
export class GoodsEvaluatePageModule {
  itemsObj: Array<ObjectModule>;
}
export class ObjectModule {
  detail: string;
  name: string;
  id: string;
  header: string;
  time: string;
}
