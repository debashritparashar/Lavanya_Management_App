import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrivalAlertSystemRoutingModule } from './arrival-alert-system-routing.module';
import { ArrivalAlertSystemComponent } from './arrival-alert-system.component';

@NgModule({
  declarations: [ArrivalAlertSystemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArrivalAlertSystemRoutingModule
  ],
  exports: [ArrivalAlertSystemComponent]
})
export class ArrivalAlertSystemModule {}
