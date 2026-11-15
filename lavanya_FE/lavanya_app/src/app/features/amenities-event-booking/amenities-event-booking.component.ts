import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { AmenitiesEventBookingService } from './amenities-event-booking.service';

@Component({
  selector: 'app-amenities-event-booking',
  standalone: false,
  templateUrl: './amenities-event-booking.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmenitiesEventBookingComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: AmenitiesEventBookingService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
