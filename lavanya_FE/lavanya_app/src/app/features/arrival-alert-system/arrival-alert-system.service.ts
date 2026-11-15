import { Injectable, signal, computed } from '@angular/core';

export interface ArrivalAlertSystemRecord {
  id: string;
  name: string;
  roleOrType: string;
  amountOrMeta: string;
  dateOrShift: string;
  verified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ArrivalAlertSystemService {
  private readonly recordsSignal = signal<ArrivalAlertSystemRecord[]>([
    {
      id: 'ar-101',
      name: 'Arrival Alert System — Primary Record #1',
      roleOrType: 'Lavanya Cosmos Tower A & B',
      amountOrMeta: 'Verified via ArrivalAlertSystemService',
      dateOrShift: 'Today, 09:30 AM',
      verified: true
    },
    {
      id: 'ar-102',
      name: 'Arrival Alert System — Secondary Entry #2',
      roleOrType: 'Lavanya Cosmos Phase II',
      amountOrMeta: 'Scheduled / Auto-Processed',
      dateOrShift: 'Today, 11:15 AM',
      verified: true
    },
    {
      id: 'ar-103',
      name: 'Arrival Alert System — Action Item #3',
      roleOrType: 'Pending Committee / Guard Verification',
      amountOrMeta: 'Awaiting Approval',
      dateOrShift: 'Due Today',
      verified: false
    }
  ]);

  readonly records = this.recordsSignal.asReadonly();
  readonly totalCount = computed(() => this.recordsSignal().length);
  readonly verifiedCount = computed(() => this.recordsSignal().filter(r => r.verified).length);
  readonly pendingCount = computed(() => this.totalCount() - this.verifiedCount());

  getRecords(): ArrivalAlertSystemRecord[] {
    return this.recordsSignal();
  }

  addRecord(name: string, roleOrType: string, amountOrMeta: string): void {
    if (!name.trim()) return;
    const newItem: ArrivalAlertSystemRecord = {
      id: 'ar-' + Date.now().toString().slice(-4),
      name: name.trim(),
      roleOrType: roleOrType.trim() || 'Standard Arrival Alert System Operation',
      amountOrMeta: amountOrMeta.trim() || 'Processed',
      dateOrShift: 'Just Now',
      verified: true
    };
    this.recordsSignal.update(current => [newItem, ...current]);
  }

  toggleStatus(id: string): void {
    this.recordsSignal.update(current =>
      current.map(item => (item.id === id ? { ...item, verified: !item.verified } : item))
    );
  }

  deleteRecord(id: string): void {
    this.recordsSignal.update(current => current.filter(item => item.id !== id));
  }
}
