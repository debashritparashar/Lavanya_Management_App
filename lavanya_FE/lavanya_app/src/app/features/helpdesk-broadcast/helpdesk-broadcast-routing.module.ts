import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpdeskBroadcastComponent } from './helpdesk-broadcast.component';

const routes: Routes = [
  {
    path: '',
    component: HelpdeskBroadcastComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskBroadcastRoutingModule {}
