import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmenitiesEventBookingRoutingModule } from './amenities-event-booking-routing.module';
import { AmenitiesEventBookingComponent } from './amenities-event-booking.component';

@NgModule({
  declarations: [AmenitiesEventBookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    AmenitiesEventBookingRoutingModule
  ],
  exports: [AmenitiesEventBookingComponent]
})
export class AmenitiesEventBookingModule {}
