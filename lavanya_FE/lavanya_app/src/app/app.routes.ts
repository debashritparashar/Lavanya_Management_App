import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { preload: true, moduleName: 'HomeModule' },
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'command-center',
    data: { preload: true, moduleName: 'SandboxModule' },
    loadChildren: () =>
      import('./features/sandbox/sandbox.module').then((m) => m.SandboxModule)
  },
  {
    path: 'modules',
    data: { preload: true, moduleName: 'CatalogModule' },
    loadChildren: () =>
      import('./features/catalog/catalog.module').then((m) => m.CatalogModule)
  },
  {
    path: 'admin-auth',
    data: { preload: false, moduleName: 'AuthModule' },
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  // All 15 Society Management Feature Modules (Lazy-Loaded on Demand via ES Dynamic import())
  {
    path: 'features/payment-management',
    data: { preload: true, featureId: 'payment-management' },
    loadChildren: () =>
      import('./features/payment-management/payment-management.module').then(
        (m) => m.PaymentManagementModule
      )
  },
  {
    path: 'features/expense-management',
    data: { preload: true, featureId: 'expense-management' },
    loadChildren: () =>
      import('./features/expense-management/expense-management.module').then(
        (m) => m.ExpenseManagementModule
      )
  },
  {
    path: 'features/accounting-reports',
    data: { preload: false, featureId: 'accounting-reports' },
    loadChildren: () =>
      import('./features/accounting-reports/accounting-reports.module').then(
        (m) => m.AccountingReportsModule
      )
  },
  {
    path: 'features/digital-invoice-receipt',
    data: { preload: false, featureId: 'digital-invoice-receipt' },
    loadChildren: () =>
      import(
        './features/digital-invoice-receipt/digital-invoice-receipt.module'
      ).then((m) => m.DigitalInvoiceReceiptModule)
  },
  {
    path: 'features/amenities-event-booking',
    data: { preload: false, featureId: 'amenities-event-booking' },
    loadChildren: () =>
      import(
        './features/amenities-event-booking/amenities-event-booking.module'
      ).then((m) => m.AmenitiesEventBookingModule)
  },
  {
    path: 'features/meeting-management',
    data: { preload: false, featureId: 'meeting-management' },
    loadChildren: () =>
      import('./features/meeting-management/meeting-management.module').then(
        (m) => m.MeetingManagementModule
      )
  },
  {
    path: 'features/helpdesk-broadcast',
    data: { preload: false, featureId: 'helpdesk-broadcast' },
    loadChildren: () =>
      import('./features/helpdesk-broadcast/helpdesk-broadcast.module').then(
        (m) => m.HelpdeskBroadcastModule
      )
  },
  {
    path: 'features/visitor-management',
    data: { preload: true, featureId: 'visitor-management' },
    loadChildren: () =>
      import('./features/visitor-management/visitor-management.module').then(
        (m) => m.VisitorManagementModule
      )
  },
  {
    path: 'features/staff-vendor-management',
    data: { preload: true, featureId: 'staff-vendor-management' },
    loadChildren: () =>
      import(
        './features/staff-vendor-management/staff-vendor-management.module'
      ).then((m) => m.StaffVendorManagementModule)
  },
  {
    path: 'features/parking-management',
    data: { preload: false, featureId: 'parking-management' },
    loadChildren: () =>
      import('./features/parking-management/parking-management.module').then(
        (m) => m.ParkingManagementModule
      )
  },
  {
    path: 'features/document-management',
    data: { preload: false, featureId: 'document-management' },
    loadChildren: () =>
      import('./features/document-management/document-management.module').then(
        (m) => m.DocumentManagementModule
      )
  },
  {
    path: 'features/polling-notice-board',
    data: { preload: false, featureId: 'polling-notice-board' },
    loadChildren: () =>
      import(
        './features/polling-notice-board/polling-notice-board.module'
      ).then((m) => m.PollingNoticeBoardModule)
  },
  {
    path: 'features/arrival-alert-system',
    data: { preload: false, featureId: 'arrival-alert-system' },
    loadChildren: () =>
      import(
        './features/arrival-alert-system/arrival-alert-system.module'
      ).then((m) => m.ArrivalAlertSystemModule)
  },
  {
    path: 'features/multiple-gate-management',
    data: { preload: false, featureId: 'multiple-gate-management' },
    loadChildren: () =>
      import(
        './features/multiple-gate-management/multiple-gate-management.module'
      ).then((m) => m.MultipleGateManagementModule)
  },
  {
    path: 'features/guard-patrolling',
    data: { preload: false, featureId: 'guard-patrolling' },
    loadChildren: () =>
      import('./features/guard-patrolling/guard-patrolling.module').then(
        (m) => m.GuardPatrollingModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
