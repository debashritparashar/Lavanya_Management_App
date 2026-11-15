import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeetingManagementRoutingModule } from './meeting-management-routing.module';
import { MeetingManagementComponent } from './meeting-management.component';

@NgModule({
  declarations: [MeetingManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    MeetingManagementRoutingModule
  ],
  exports: [MeetingManagementComponent]
})
export class MeetingManagementModule {}
