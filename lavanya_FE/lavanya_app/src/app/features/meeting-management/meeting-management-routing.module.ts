import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingManagementComponent } from './meeting-management.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingManagementRoutingModule {}
