import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultipleGateManagementComponent } from './multiple-gate-management.component';

const routes: Routes = [
  {
    path: '',
    component: MultipleGateManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleGateManagementRoutingModule {}
