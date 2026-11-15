import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollingNoticeBoardComponent } from './polling-notice-board.component';

const routes: Routes = [
  {
    path: '',
    component: PollingNoticeBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollingNoticeBoardRoutingModule {}
