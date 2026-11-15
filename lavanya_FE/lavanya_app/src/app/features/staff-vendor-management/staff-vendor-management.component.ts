import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { StaffVendorManagementService } from './staff-vendor-management.service';

@Component({
  selector: 'app-staff-vendor-management',
  standalone: false,
  templateUrl: './staff-vendor-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffVendorManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: StaffVendorManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
