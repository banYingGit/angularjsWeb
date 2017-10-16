import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPromptPage } from './order-prompt';

@NgModule({
  declarations: [
    OrderPromptPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPromptPage),
  ],
})
export class OrderPromptPageModule {}
