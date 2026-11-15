import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingManagementComponent } from './parking-management.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingManagementRoutingModule {}
