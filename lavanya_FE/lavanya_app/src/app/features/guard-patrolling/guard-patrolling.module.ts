import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuardPatrollingRoutingModule } from './guard-patrolling-routing.module';
import { GuardPatrollingComponent } from './guard-patrolling.component';

@NgModule({
  declarations: [GuardPatrollingComponent],
  imports: [
    CommonModule,
    FormsModule,
    GuardPatrollingRoutingModule
  ],
  exports: [GuardPatrollingComponent]
})
export class GuardPatrollingModule {}
