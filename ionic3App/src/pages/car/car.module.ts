import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CarPage} from './car';

@NgModule({
  declarations: [
    CarPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPage),
  ],
})
export class CarPageModule {
  itemsObj: Array<ObjectModule>;
}
export class ObjectModule {
  proImg: string;
  title: string;
  id: string;
  color: string;
  num: string;
  price: string
  isCs: boolean
}
