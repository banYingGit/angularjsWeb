import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MakeResultPage} from './make-result';

@NgModule({
  declarations: [
    MakeResultPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeResultPage),
  ],
})
export class MakeResultPageModule {
  itemsObj: object;
  listData: Array<ObjectModule>
}

export class ObjectModule {
  id: string;
  proImg: string;
  title: string;
  price: string;
  label: string;

}
