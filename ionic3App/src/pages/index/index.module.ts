import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {IndexPage} from './index';

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
  ],
})


export class IndexPageModule {

  items: Array<string>;
  itemsObj: Array<ObjectModule>;

}
export class ObjectModule {
  title: string;
  id: string;
  header: string;
  name: string;
  position: string;
  label: Array<string>;
  photo: Array<string>;
  detail: string;
  proImg: string
}
