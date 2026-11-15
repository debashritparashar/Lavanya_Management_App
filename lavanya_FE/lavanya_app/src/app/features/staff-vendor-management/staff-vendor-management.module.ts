import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaffVendorManagementRoutingModule } from './staff-vendor-management-routing.module';
import { StaffVendorManagementComponent } from './staff-vendor-management.component';

@NgModule({
  declarations: [StaffVendorManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    StaffVendorManagementRoutingModule
  ],
  exports: [StaffVendorManagementComponent]
})
export class StaffVendorManagementModule {}
