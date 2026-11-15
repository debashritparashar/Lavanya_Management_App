import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MeetingManagementService } from './meeting-management.service';

@Component({
  selector: 'app-meeting-management',
  standalone: false,
  templateUrl: './meeting-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetingManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: MeetingManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
