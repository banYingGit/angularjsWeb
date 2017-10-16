import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParityPage } from './parity';

@NgModule({
  declarations: [
    ParityPage,
  ],
  imports: [
    IonicPageModule.forChild(ParityPage),
  ],
})
export class ParityPageModule {}
