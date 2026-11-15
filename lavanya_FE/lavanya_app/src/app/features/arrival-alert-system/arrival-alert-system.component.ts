import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ArrivalAlertSystemService } from './arrival-alert-system.service';

@Component({
  selector: 'app-arrival-alert-system',
  standalone: false,
  templateUrl: './arrival-alert-system.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrivalAlertSystemComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: ArrivalAlertSystemService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
