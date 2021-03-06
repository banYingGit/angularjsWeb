import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderListPage} from './order-list';

@NgModule({
  declarations: [
    OrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListPage),
  ],
})
export class OrderListPageModule {
  items: Array<ObjectModule>;
  goods: Array<string>
}
export class ObjectModule {
  proImg: string;
  title: string;
  id: string;
  detail: string;
  goods: Array<string>;
}
