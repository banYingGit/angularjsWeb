import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CityPickerComponent} from './city-picker';

@NgModule({
  declarations: [
    CityPickerComponent,
  ],
  imports: [
    IonicPageModule.forChild(CityPickerComponent),
  ],
})
export class CityPickerModule {
  itemsObj: Array<ObjectModule>;
}
export class ObjectModule {

  id: string;
  name: string;

}

