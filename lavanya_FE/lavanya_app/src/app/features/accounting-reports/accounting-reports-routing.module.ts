import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingReportsComponent } from './accounting-reports.component';

const routes: Routes = [
  {
    path: '',
    component: AccountingReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingReportsRoutingModule {}
