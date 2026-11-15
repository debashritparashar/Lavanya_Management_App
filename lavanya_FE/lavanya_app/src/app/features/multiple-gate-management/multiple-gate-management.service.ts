import { Injectable, signal, computed } from '@angular/core';

export interface MultipleGateManagementRecord {
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
export class MultipleGateManagementService {
  private readonly recordsSignal = signal<MultipleGateManagementRecord[]>([
    {
      id: 'mu-101',
      name: 'Multiple Gate Management — Primary Record #1',
      roleOrType: 'Lavanya Cosmos Tower A & B',
      amountOrMeta: 'Verified via MultipleGateManagementService',
      dateOrShift: 'Today, 09:30 AM',
      verified: true
    },
    {
      id: 'mu-102',
      name: 'Multiple Gate Management — Secondary Entry #2',
      roleOrType: 'Lavanya Cosmos Phase II',
      amountOrMeta: 'Scheduled / Auto-Processed',
      dateOrShift: 'Today, 11:15 AM',
      verified: true
    },
    {
      id: 'mu-103',
      name: 'Multiple Gate Management — Action Item #3',
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

  getRecords(): MultipleGateManagementRecord[] {
    return this.recordsSignal();
  }

  addRecord(name: string, roleOrType: string, amountOrMeta: string): void {
    if (!name.trim()) return;
    const newItem: MultipleGateManagementRecord = {
      id: 'mu-' + Date.now().toString().slice(-4),
      name: name.trim(),
      roleOrType: roleOrType.trim() || 'Standard Multiple Gate Management Operation',
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
