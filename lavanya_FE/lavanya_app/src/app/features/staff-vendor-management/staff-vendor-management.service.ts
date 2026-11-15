import { Injectable, signal, computed } from '@angular/core';

export interface StaffVendorManagementRecord {
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
export class StaffVendorManagementService {
  private readonly recordsSignal = signal<StaffVendorManagementRecord[]>([
    {
      id: 'st-101',
      name: 'Staff & Vendor Management — Primary Record #1',
      roleOrType: 'Lavanya Cosmos Tower A & B',
      amountOrMeta: 'Verified via StaffVendorManagementService',
      dateOrShift: 'Today, 09:30 AM',
      verified: true
    },
    {
      id: 'st-102',
      name: 'Staff & Vendor Management — Secondary Entry #2',
      roleOrType: 'Lavanya Cosmos Phase II',
      amountOrMeta: 'Scheduled / Auto-Processed',
      dateOrShift: 'Today, 11:15 AM',
      verified: true
    },
    {
      id: 'st-103',
      name: 'Staff & Vendor Management — Action Item #3',
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

  getRecords(): StaffVendorManagementRecord[] {
    return this.recordsSignal();
  }

  addRecord(name: string, roleOrType: string, amountOrMeta: string): void {
    if (!name.trim()) return;
    const newItem: StaffVendorManagementRecord = {
      id: 'st-' + Date.now().toString().slice(-4),
      name: name.trim(),
      roleOrType: roleOrType.trim() || 'Standard Staff & Vendor Management Operation',
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
