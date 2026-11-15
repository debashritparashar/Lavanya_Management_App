import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';

@NgModule({
  declarations: [DemoModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, DemoModalComponent]
})
export class SharedModule {}
