import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { HelpdeskBroadcastService } from './helpdesk-broadcast.service';

@Component({
  selector: 'app-helpdesk-broadcast',
  standalone: false,
  templateUrl: './helpdesk-broadcast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpdeskBroadcastComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: HelpdeskBroadcastService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
