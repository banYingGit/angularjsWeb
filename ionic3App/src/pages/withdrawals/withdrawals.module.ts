import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawalsPage } from './withdrawals';

@NgModule({
  declarations: [
    WithdrawalsPage,
  ],
  imports: [
    IonicPageModule.forChild(WithdrawalsPage),
  ],
})
export class WithdrawalsPageModule {}
