import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartdetailsComponent } from './components/cartdetails/cartdetails.component';

@NgModule({
  declarations: [CartComponent, CartdetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ]
 
})
export class CartModule { }
