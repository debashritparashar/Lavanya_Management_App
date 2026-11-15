import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { GuardPatrollingService } from './guard-patrolling.service';

@Component({
  selector: 'app-guard-patrolling',
  standalone: false,
  templateUrl: './guard-patrolling.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuardPatrollingComponent {
  readonly nameInput = signal('');
  readonly roleInput = signal('');
  readonly metaInput = signal('');

  constructor(public readonly service: GuardPatrollingService) {}

  onAdd(): void {
    this.service.addRecord(this.nameInput(), this.roleInput(), this.metaInput());
    this.nameInput.set('');
    this.roleInput.set('');
    this.metaInput.set('');
  }
}
