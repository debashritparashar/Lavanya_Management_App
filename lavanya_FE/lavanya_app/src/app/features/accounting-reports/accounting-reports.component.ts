import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AccountingReportsService } from './accounting-reports.service';

@Component({
  selector: 'app-accounting-reports',
  standalone: false,
  templateUrl: './accounting-reports.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountingReportsComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: AccountingReportsService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
