import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ParkingManagementService } from './parking-management.service';

@Component({
  selector: 'app-parking-management',
  standalone: false,
  templateUrl: './parking-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParkingManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: ParkingManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
