import { Injectable, signal, computed } from '@angular/core';
import { ProductHero, FeatureItem, CommunityProject } from '../models/society.models';

@Injectable({
  providedIn: 'root'
})
export class SocietyDataService {
  readonly products: ProductHero[] = [
    {
      id: 'dnb',
      code: 'LCS • Hub',
      title: 'Lavanya Cosmos Society',
      subtitle: 'FOR RESIDENTS, BUILDERS & DEVELOPERS',
      tagline: 'Smart Multiple Community & Township Management',
      ctaText: 'Schedule A Demo',
      badge: 'HomeModule (Lazy)',
      description: 'Unified residential township portal for Lavanya Cosmos towers, possession handovers, clubhouse bookings, and RWA governance.',
      metrics: [
        { label: 'Cosmos Towers', value: '18 Towers' },
        { label: 'Smart Apartments', value: '2,400+' }
      ]
    },
    {
      id: 'snb',
      code: 'LCS • ERP',
      title: 'Cosmos Billing & RWA',
      subtitle: 'FOR SOCIETY COMMITTEE & ACCOUNTS',
      tagline: 'Automated Maintenance, Corpus & Ledger ERP',
      ctaText: 'Schedule A Demo',
      badge: 'AccountingModule (Lazy)',
      description: 'Automated monthly maintenance invoices, sinking fund tracking, GST compliance, and instant UPI receipts for Lavanya Cosmos.',
      metrics: [
        { label: 'Collection Efficiency', value: '98.4%' },
        { label: 'Digital Receipts', value: '100% Paperless' }
      ]
    },
    {
      id: 'gnb',
      code: 'LCS • Gate',
      title: 'Cosmos Smart Security',
      subtitle: 'FOR GATED PERIMETER & VISITOR ACCESS',
      tagline: 'QR Visitor Passes, Staff Biometrics & Boom Barriers',
      ctaText: 'Schedule A Demo',
      badge: 'SecurityModule (Lazy)',
      description: 'Real-time visitor pre-approval, delivery gate pass, domestic staff attendance alerts, and RFID vehicle boom barriers.',
      metrics: [
        { label: 'Entry Gates', value: '6 Smart Lanes' },
        { label: 'Gate Verification', value: '< 5 sec' }
      ]
    }
  ];

  readonly activeProductId = signal<string>('dnb');
  readonly currentProduct = computed<ProductHero>(() => {
    return this.products.find(p => p.id === this.activeProductId()) || this.products[0];
  });

  readonly communities: CommunityProject[] = [
    {
      id: 'c1',
      name: 'Lavanya Cosmos — Phase I (Astra & Nova)',
      location: 'Sector 45, Smart City Corridor',
      towers: 8,
      units: 960,
      occupied: 918,
      collectionRate: 98,
      openSnags: 9,
      status: 'Active Maintenance'
    },
    {
      id: 'c2',
      name: 'Lavanya Cosmos — Phase II (Celestia)',
      location: 'East Wing Skybridge Enclave',
      towers: 6,
      units: 780,
      occupied: 645,
      collectionRate: 94,
      openSnags: 18,
      status: 'Handover Phase'
    },
    {
      id: 'c3',
      name: 'Lavanya Cosmos — Phase III (Orion Horizon)',
      location: 'North Lakefront Boulevard',
      towers: 4,
      units: 660,
      occupied: 410,
      collectionRate: 92,
      openSnags: 24,
      status: 'Pre-Possession'
    }
  ];

  readonly selectedCommunityId = signal<string>('c1');
  readonly snagOverrides = signal<Record<string, number>>({});

  readonly activeCommunity = computed<CommunityProject>(() => {
    const base = this.communities.find(c => c.id === this.selectedCommunityId()) || this.communities[0];
    const override = this.snagOverrides()[base.id];
    return override !== undefined ? { ...base, openSnags: override } : base;
  });

  readonly features: FeatureItem[] = [
    {
      id: 'payment-management',
      routePath: '/features/payment-management',
      category: 'finance',
      title: 'Payment Management',
      description: 'Automate monthly maintenance collections, sinking fund contributions, and UPI/NEFT auto-reconciliation.',
      highlight: 'Zero-Touch Auto-Reconciliation',
      serviceName: 'PaymentManagementService',
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 'expense-management',
      routePath: '/features/expense-management',
      category: 'finance',
      title: 'Expense Management',
      description: 'Track society operational expenses, vendor bills, purchase orders, and committee approval workflows.',
      highlight: 'Multi-Stage Voucher Approval',
      serviceName: 'ExpenseManagementService',
      iconPath: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z'
    },
    {
      id: 'accounting-reports',
      routePath: '/features/accounting-reports',
      category: 'finance',
      title: 'Accounting & Reports',
      description: 'Complete society balance sheets, income/expenditure ledgers, trial balances, and statutory audit exports.',
      highlight: 'One-Click Tally & GST Export',
      serviceName: 'AccountingReportsService',
      iconPath: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      id: 'digital-invoice-receipt',
      routePath: '/features/digital-invoice-receipt',
      category: 'finance',
      title: 'Digital Invoice & Receipt',
      description: 'Instant automated GST billing, water meter slab invoicing, and downloadable QR-verified payment receipts.',
      highlight: '100% Paperless Billing Cycle',
      serviceName: 'DigitalInvoiceReceiptService',
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      id: 'amenities-event-booking',
      routePath: '/features/amenities-event-booking',
      category: 'community',
      title: 'Amenities & Event Booking',
      description: 'Reserve clubhouse banquet halls, guest suites, tennis courts, and community event passes online.',
      highlight: 'Real-Time Slot Conflict Guard',
      serviceName: 'AmenitiesEventBookingService',
      iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      id: 'meeting-management',
      routePath: '/features/meeting-management',
      category: 'community',
      title: 'Meeting Management',
      description: 'Schedule AGM/SGM committee meetings, circulate digital agendas, track attendance, and publish minutes.',
      highlight: 'Digital MOM & Action Tracker',
      serviceName: 'MeetingManagementService',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      id: 'helpdesk-broadcast',
      routePath: '/features/helpdesk-broadcast',
      category: 'community',
      title: 'Helpdesk Broadcast',
      description: 'Centralized resident complaint ticketing, plumber/electrician SLA assignment, and emergency broadcasts.',
      highlight: 'Automated Escalation Matrix',
      serviceName: 'HelpdeskBroadcastService',
      iconPath: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
    },
    {
      id: 'visitor-management',
      routePath: '/features/visitor-management',
      category: 'security',
      title: 'Visitor Management',
      description: 'Pre-approve guests, cabs, and deliveries with OTP passcodes and instant photo alerts at the gate.',
      highlight: 'IVR-Free Instant Approval',
      serviceName: 'VisitorManagementService',
      iconPath: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
    },
    {
      id: 'staff-vendor-management',
      routePath: '/features/staff-vendor-management',
      category: 'security',
      title: 'Staff & Vendor Management',
      description: 'Eliminate traditional attendance registers for maids, staff, and vendors with GST/TDS invoice accounting.',
      highlight: 'Biometric & Gate Sync',
      serviceName: 'StaffVendorManagementService',
      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 'parking-management',
      routePath: '/features/parking-management',
      category: 'security',
      title: 'Parking Management',
      description: 'Allocate basement and stilt parking slots, manage RFID boom barriers, and log guest vehicle bays.',
      highlight: 'RFID & ANPR Boom Integration',
      serviceName: 'ParkingManagementService',
      iconPath: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
    },
    {
      id: 'document-management',
      routePath: '/features/document-management',
      category: 'community',
      title: 'Document Management',
      description: 'Centralized cloud repository for society bye-laws, flat NOCs, conveyance deeds, and vendor contracts.',
      highlight: 'Role-Based Encrypted Vault',
      serviceName: 'DocumentManagementService',
      iconPath: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
    },
    {
      id: 'polling-notice-board',
      routePath: '/features/polling-notice-board',
      category: 'community',
      title: 'Polling Notice Board',
      description: 'Run encrypted resident opinion polls, RWA elections, and publish digital circulars on the notice board.',
      highlight: '1-Flat 1-Vote Verified',
      serviceName: 'PollingNoticeBoardService',
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
      id: 'arrival-alert-system',
      routePath: '/features/arrival-alert-system',
      category: 'security',
      title: 'Arrival Alert System',
      description: 'Real-time mobile arrival notifications for school buses, domestic help, parcels, and cab pickups.',
      highlight: 'Instant Push & IVR Ring',
      serviceName: 'ArrivalAlertSystemService',
      iconPath: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    },
    {
      id: 'multiple-gate-management',
      routePath: '/features/multiple-gate-management',
      category: 'security',
      title: 'Multiple Gate Management',
      description: 'Coordinate entry/exit telemetry across Main Gate, East Wing Service Gate, and Basement Boom Barriers.',
      highlight: 'Centralized Perimeter Sync',
      serviceName: 'MultipleGateManagementService',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      id: 'guard-patrolling',
      routePath: '/features/guard-patrolling',
      category: 'security',
      title: 'Guard Patrolling',
      description: 'QR/NFC checkpoint scanning for night-shift security guards with real-time incident reporting.',
      highlight: 'Geo-Tagged Night Patrols',
      serviceName: 'GuardPatrollingService',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    }
  ];

  readonly demoModalOpen = signal<boolean>(false);

  selectProduct(id: string): void {
    this.activeProductId.set(id);
  }

  resolveOneSnag(): void {
    const current = this.activeCommunity();
    const nextVal = Math.max(0, current.openSnags - 1);
    this.snagOverrides.update(prev => ({ ...prev, [current.id]: nextVal }));
  }

  openDemoModal(): void {
    this.demoModalOpen.set(true);
  }

  closeDemoModal(): void {
    this.demoModalOpen.set(false);
  }
}
