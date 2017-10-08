import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MasterDetailsPage} from './master-details';

@NgModule({
  declarations: [
    MasterDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterDetailsPage),
  ],
})
export class MasterDetailsPageModule {
  userInfor: object
  proList: Array<ObjectModule>
  infor1: string
  infor2: string
}

export class ObjectModule {
  id: string;
  proImg: string;
  title: string;
  price: string;
  num: string;
  level: string;
  detail: string;
}
