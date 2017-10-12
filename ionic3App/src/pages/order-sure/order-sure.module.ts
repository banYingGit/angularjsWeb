import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderSurePage } from './order-sure';

@NgModule({
  declarations: [
    OrderSurePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderSurePage),
  ],
})
export class OrderSurePageModule {}
