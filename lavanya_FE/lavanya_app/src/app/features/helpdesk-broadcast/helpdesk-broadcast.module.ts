import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpdeskBroadcastRoutingModule } from './helpdesk-broadcast-routing.module';
import { HelpdeskBroadcastComponent } from './helpdesk-broadcast.component';

@NgModule({
  declarations: [HelpdeskBroadcastComponent],
  imports: [
    CommonModule,
    FormsModule,
    HelpdeskBroadcastRoutingModule
  ],
  exports: [HelpdeskBroadcastComponent]
})
export class HelpdeskBroadcastModule {}
