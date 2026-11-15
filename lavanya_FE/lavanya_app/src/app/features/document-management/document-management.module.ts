import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentManagementRoutingModule } from './document-management-routing.module';
import { DocumentManagementComponent } from './document-management.component';

@NgModule({
  declarations: [DocumentManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    DocumentManagementRoutingModule
  ],
  exports: [DocumentManagementComponent]
})
export class DocumentManagementModule {}
