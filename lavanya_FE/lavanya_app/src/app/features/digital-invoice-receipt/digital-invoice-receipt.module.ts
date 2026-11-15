import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DigitalInvoiceReceiptRoutingModule } from './digital-invoice-receipt-routing.module';
import { DigitalInvoiceReceiptComponent } from './digital-invoice-receipt.component';

@NgModule({
  declarations: [DigitalInvoiceReceiptComponent],
  imports: [
    CommonModule,
    FormsModule,
    DigitalInvoiceReceiptRoutingModule
  ],
  exports: [DigitalInvoiceReceiptComponent]
})
export class DigitalInvoiceReceiptModule {}
