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

  images: Array<string>;

}
// export class List1Model {
//   bannerData: any;
//   image: string;
//   description: string;
//
// }
