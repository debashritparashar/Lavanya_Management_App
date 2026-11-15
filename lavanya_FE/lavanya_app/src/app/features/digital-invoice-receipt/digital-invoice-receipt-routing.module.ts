import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalInvoiceReceiptComponent } from './digital-invoice-receipt.component';

const routes: Routes = [
  {
    path: '',
    component: DigitalInvoiceReceiptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalInvoiceReceiptRoutingModule {}
