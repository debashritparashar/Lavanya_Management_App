import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardPatrollingComponent } from './guard-patrolling.component';

const routes: Routes = [
  {
    path: '',
    component: GuardPatrollingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardPatrollingRoutingModule {}
