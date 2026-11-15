import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseManagementRoutingModule } from './expense-management-routing.module';
import { ExpenseManagementComponent } from './expense-management.component';

@NgModule({
  declarations: [ExpenseManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExpenseManagementRoutingModule
  ],
  exports: [ExpenseManagementComponent]
})
export class ExpenseManagementModule {}
