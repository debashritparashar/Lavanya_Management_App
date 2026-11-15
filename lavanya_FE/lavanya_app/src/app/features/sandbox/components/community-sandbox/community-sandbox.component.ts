import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocietyDataService } from '../../../../core/services/society-data.service';

@Component({
  selector: 'app-community-sandbox',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 sm:py-20 bg-slate-50 border-t border-sky-100">
      <div class="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-[#0284c7]">
          LAZY-LOADED SANDBOX MODULE
        </span>
        <h3 class="text-2xl sm:text-3xl font-bold text-[#0f2c59] mt-2">
          Lavanya Cosmos Multi-Phase Command Center
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          @for (proj of dataService.communities; track proj.id) {
            <button
              type="button"
              (click)="dataService.selectedCommunityId.set(proj.id)"
              [class]="dataService.selectedCommunityId() === proj.id
                ? 'text-left p-5 rounded-2xl bg-white border-2 border-[#0284c7] shadow-md transition'
                : 'text-left p-5 rounded-2xl bg-white border border-gray-200 hover:border-sky-200 shadow-sm transition'">
              <div class="font-semibold text-gray-900">{{ proj.name }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ proj.location }}</div>
            </button>
          }
        </div>
      </div>
    </section>
  `
})
export class CommunitySandboxComponent {
  constructor(public readonly dataService: SocietyDataService) {}
}
