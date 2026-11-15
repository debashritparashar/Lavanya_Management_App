import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { SocietyDataService } from '../../../../core/services/society-data.service';
import { FeatureItem } from '../../../../core/models/society.models';

@Component({
  selector: 'app-features-grid',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 sm:py-20 bg-white">
      <div class="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-[#0284c7]">
              15 Lazy-Loaded Feature Modules &amp; Dedicated Services
            </span>
            <h3 class="text-2xl sm:text-3xl font-bold text-[#0f2c59] mt-2">
              Lavanya Cosmos Society — Smart Modules
            </h3>
            <p class="text-sm text-slate-600 mt-1">
              Click any module below or use the top Features dropdown to open its dedicated component and live service console.
            </p>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              (click)="filter.set('all')"
              class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
              [class]="filter() === 'all' ? 'bg-[#0f2c59] text-white shadow-sm' : 'bg-sky-50 text-[#0f2c59] hover:bg-sky-100'">
              All 15 Modules
            </button>
            <button
              type="button"
              (click)="filter.set('finance')"
              class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
              [class]="filter() === 'finance' ? 'bg-[#0284c7] text-white shadow-sm' : 'bg-sky-50 text-[#0f2c59] hover:bg-sky-100'">
              Finance &amp; Billing (4)
            </button>
            <button
              type="button"
              (click)="filter.set('community')"
              class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
              [class]="filter() === 'community' ? 'bg-[#0284c7] text-white shadow-sm' : 'bg-sky-50 text-[#0f2c59] hover:bg-sky-100'">
              Community &amp; RWA (5)
            </button>
            <button
              type="button"
              (click)="filter.set('security')"
              class="px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
              [class]="filter() === 'security' ? 'bg-[#0284c7] text-white shadow-sm' : 'bg-sky-50 text-[#0f2c59] hover:bg-sky-100'">
              Gate &amp; Security (6)
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          @for (feat of filteredFeatures(); track feat.id) {
            <a
              [routerLink]="feat.routePath"
              class="group p-6 rounded-2xl border border-sky-100 bg-white shadow-xs hover:shadow-xl hover:border-[#0284c7] transition flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between gap-3">
                  <div class="w-11 h-11 rounded-xl bg-sky-50 text-[#0284c7] group-hover:bg-[#0f2c59] group-hover:text-white transition flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" [attr.d]="feat.iconPath" />
                    </svg>
                  </div>
                  <span class="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {{ feat.serviceName }}
                  </span>
                </div>
                <h4 class="text-lg font-semibold text-[#0f2c59] group-hover:text-[#0284c7] transition mt-4">
                  {{ feat.title }}
                </h4>
                <p class="text-sm text-slate-600 mt-2 leading-relaxed">
                  {{ feat.description }}
                </p>
              </div>

              <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <span class="text-sky-700">{{ feat.highlight }}</span>
                <span class="text-[#0284c7] group-hover:translate-x-1 transition-transform">
                  Open Service →
                </span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class FeaturesGridComponent {
  readonly filter = signal<'all' | 'finance' | 'community' | 'security'>('all');
  readonly filteredFeatures = computed<FeatureItem[]>(() => {
    const f = this.filter();
    return f === 'all' ? this.dataService.features : this.dataService.features.filter(i => i.category === f);
  });
  constructor(public readonly dataService: SocietyDataService) {}
}
