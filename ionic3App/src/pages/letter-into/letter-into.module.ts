import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterIntoPage } from './letter-into';

@NgModule({
  declarations: [
    LetterIntoPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterIntoPage),
  ],
})
export class LetterIntoPageModule {}
