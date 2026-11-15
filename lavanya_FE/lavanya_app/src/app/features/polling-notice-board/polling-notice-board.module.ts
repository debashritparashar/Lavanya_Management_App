import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PollingNoticeBoardRoutingModule } from './polling-notice-board-routing.module';
import { PollingNoticeBoardComponent } from './polling-notice-board.component';

@NgModule({
  declarations: [PollingNoticeBoardComponent],
  imports: [
    CommonModule,
    FormsModule,
    PollingNoticeBoardRoutingModule
  ],
  exports: [PollingNoticeBoardComponent]
})
export class PollingNoticeBoardModule {}
