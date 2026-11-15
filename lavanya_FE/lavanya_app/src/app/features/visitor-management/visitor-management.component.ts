import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { VisitorManagementService } from './visitor-management.service';

@Component({
  selector: 'app-visitor-management',
  standalone: false,
  templateUrl: './visitor-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: VisitorManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
