import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitorManagementRoutingModule } from './visitor-management-routing.module';
import { VisitorManagementComponent } from './visitor-management.component';

@NgModule({
  declarations: [VisitorManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    VisitorManagementRoutingModule
  ],
  exports: [VisitorManagementComponent]
})
export class VisitorManagementModule {}
