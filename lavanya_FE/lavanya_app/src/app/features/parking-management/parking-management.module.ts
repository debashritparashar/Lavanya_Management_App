import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingManagementRoutingModule } from './parking-management-routing.module';
import { ParkingManagementComponent } from './parking-management.component';

@NgModule({
  declarations: [ParkingManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ParkingManagementRoutingModule
  ],
  exports: [ParkingManagementComponent]
})
export class ParkingManagementModule {}
