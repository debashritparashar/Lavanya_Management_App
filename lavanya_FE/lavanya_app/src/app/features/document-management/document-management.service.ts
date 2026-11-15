import { Injectable, signal, computed } from '@angular/core';

export interface DocumentManagementRecord {
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
export class DocumentManagementService {
  private readonly recordsSignal = signal<DocumentManagementRecord[]>([
    {
      id: 'do-101',
      name: 'Document Management — Primary Record #1',
      roleOrType: 'Lavanya Cosmos Tower A & B',
      amountOrMeta: 'Verified via DocumentManagementService',
      dateOrShift: 'Today, 09:30 AM',
      verified: true
    },
    {
      id: 'do-102',
      name: 'Document Management — Secondary Entry #2',
      roleOrType: 'Lavanya Cosmos Phase II',
      amountOrMeta: 'Scheduled / Auto-Processed',
      dateOrShift: 'Today, 11:15 AM',
      verified: true
    },
    {
      id: 'do-103',
      name: 'Document Management — Action Item #3',
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

  getRecords(): DocumentManagementRecord[] {
    return this.recordsSignal();
  }

  addRecord(name: string, roleOrType: string, amountOrMeta: string): void {
    if (!name.trim()) return;
    const newItem: DocumentManagementRecord = {
      id: 'do-' + Date.now().toString().slice(-4),
      name: name.trim(),
      roleOrType: roleOrType.trim() || 'Standard Document Management Operation',
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
