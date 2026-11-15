import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesEventBookingComponent } from './amenities-event-booking.component';

const routes: Routes = [
  {
    path: '',
    component: AmenitiesEventBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmenitiesEventBookingRoutingModule {}
