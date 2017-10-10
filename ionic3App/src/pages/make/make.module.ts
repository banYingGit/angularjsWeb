import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakePage } from './make';

@NgModule({
  declarations: [
    MakePage,
  ],
  imports: [
    IonicPageModule.forChild(MakePage),
  ],
})
export class MakePageModule {}
