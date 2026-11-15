import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultipleGateManagementRoutingModule } from './multiple-gate-management-routing.module';
import { MultipleGateManagementComponent } from './multiple-gate-management.component';

@NgModule({
  declarations: [MultipleGateManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    MultipleGateManagementRoutingModule
  ],
  exports: [MultipleGateManagementComponent]
})
export class MultipleGateManagementModule {}
