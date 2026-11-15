import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffVendorManagementComponent } from './staff-vendor-management.component';

const routes: Routes = [
  {
    path: '',
    component: StaffVendorManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffVendorManagementRoutingModule {}
