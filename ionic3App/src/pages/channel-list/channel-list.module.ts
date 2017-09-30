import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChannelListPage} from './channel-list';

@NgModule({
  declarations: [
    ChannelListPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelListPage),
  ],
})
export class ChannelListPageModule {
  itemsObj: Array<ObjectModule>;
}
export class ObjectModule {
  proImg: string;
  title: string;
  id: string;
  detail: string;
  label: Array<string>;
}
