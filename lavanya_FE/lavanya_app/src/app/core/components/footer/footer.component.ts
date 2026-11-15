import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-[#07193f] text-slate-300 py-12 mt-auto">
      <div class="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-[#0284c7] text-white font-bold flex items-center justify-center text-sm">
            LCS
          </div>
          <div>
            <div class="text-white font-semibold text-base">Lavanya Cosmos Society • Smart Residential &amp; Township ERP</div>
            <div class="text-xs text-sky-300">Modular Angular Architecture with Route-Level Lazy Loading</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
          <button type="button" (click)="scheduleDemo.emit()" class="hover:text-white transition">Schedule A Demo</button>
          <a routerLink="/command-center" class="hover:text-white transition">Command Center</a>
          <a routerLink="/admin-auth" class="text-sky-400 hover:text-sky-300 font-medium transition">Admin Login</a>
          <a routerLink="/admin-auth/tenant" class="text-sky-400 hover:text-sky-300 font-medium transition">Tenant Login</a>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Output() scheduleDemo = new EventEmitter<void>();
}
