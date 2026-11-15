import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { PollingNoticeBoardService } from './polling-notice-board.service';

@Component({
  selector: 'app-polling-notice-board',
  standalone: false,
  templateUrl: './polling-notice-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PollingNoticeBoardComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: PollingNoticeBoardService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
