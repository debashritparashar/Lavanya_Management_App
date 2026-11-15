import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrivalAlertSystemComponent } from './arrival-alert-system.component';

const routes: Routes = [
  {
    path: '',
    component: ArrivalAlertSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrivalAlertSystemRoutingModule {}
