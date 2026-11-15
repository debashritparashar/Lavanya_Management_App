import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { DigitalInvoiceReceiptService } from './digital-invoice-receipt.service';

@Component({
  selector: 'app-digital-invoice-receipt',
  standalone: false,
  templateUrl: './digital-invoice-receipt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DigitalInvoiceReceiptComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: DigitalInvoiceReceiptService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
