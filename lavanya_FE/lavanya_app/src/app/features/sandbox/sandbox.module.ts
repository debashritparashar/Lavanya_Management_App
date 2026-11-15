import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { CommunitySandboxComponent } from './components/community-sandbox/community-sandbox.component';

@NgModule({
  declarations: [CommunitySandboxComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule
  ],
  exports: [CommunitySandboxComponent]
})
export class SandboxModule {}
