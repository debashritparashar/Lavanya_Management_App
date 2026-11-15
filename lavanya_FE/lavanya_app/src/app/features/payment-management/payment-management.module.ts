import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentManagementRoutingModule } from './payment-management-routing.module';
import { PaymentManagementComponent } from './payment-management.component';

@NgModule({
  declarations: [PaymentManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaymentManagementRoutingModule
  ],
  exports: [PaymentManagementComponent]
})
export class PaymentManagementModule {}
