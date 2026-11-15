import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitySandboxComponent } from './components/community-sandbox/community-sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: CommunitySandboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
