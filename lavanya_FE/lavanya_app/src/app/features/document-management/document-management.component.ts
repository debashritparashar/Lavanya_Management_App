import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { DocumentManagementService } from './document-management.service';

@Component({
  selector: 'app-document-management',
  standalone: false,
  templateUrl: './document-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: DocumentManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
