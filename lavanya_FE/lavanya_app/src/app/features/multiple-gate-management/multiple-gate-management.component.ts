import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MultipleGateManagementService } from './multiple-gate-management.service';

@Component({
  selector: 'app-multiple-gate-management',
  standalone: false,
  templateUrl: './multiple-gate-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleGateManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: MultipleGateManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
