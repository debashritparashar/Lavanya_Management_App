import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { ExpenseManagementService } from './expense-management.service';

@Component({
  selector: 'app-expense-management',
  standalone: false,
  templateUrl: './expense-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: ExpenseManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
