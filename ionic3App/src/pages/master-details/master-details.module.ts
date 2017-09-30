import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterDetailsPage } from './master-details';

@NgModule({
  declarations: [
    MasterDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterDetailsPage),
  ],
})
export class MasterDetailsPageModule {}
