import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeWelcomePage } from './make-welcome';

@NgModule({
  declarations: [
    MakeWelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(MakeWelcomePage),
  ],
})
export class MakeWelcomePageModule {}
