import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountingReportsRoutingModule } from './accounting-reports-routing.module';
import { AccountingReportsComponent } from './accounting-reports.component';

@NgModule({
  declarations: [AccountingReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountingReportsRoutingModule
  ],
  exports: [AccountingReportsComponent]
})
export class AccountingReportsModule {}
