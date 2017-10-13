import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AddressChoosePage} from './address-choose';

@NgModule({
  declarations: [
    AddressChoosePage,
  ],
  imports: [
    IonicPageModule.forChild(AddressChoosePage),
  ],
})
export class AddressChoosePageModule {
  itemsObj: Array<ObjectModule>;
}
export class ObjectModule {

  id: string;
  name: string;

}
