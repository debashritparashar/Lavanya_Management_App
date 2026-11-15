import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { PaymentManagementService } from './payment-management.service';

@Component({
  selector: 'app-payment-management',
  standalone: false,
  templateUrl: './payment-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentManagementComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: PaymentManagementService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
