import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SocietyDataService } from '../../../../core/services/society-data.service';

@Component({
  selector: 'app-hero-banner',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative w-full min-h-[600px] lg:min-h-[650px] flex flex-col justify-between overflow-hidden bg-white pt-8 sm:pt-14 lg:pt-20">
      <div class="max-w-[1360px] w-full mx-auto px-6 sm:px-12 lg:px-32 z-20 relative">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284c7] text-xs font-semibold mb-3">
            <span class="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse"></span>
            <span>{{ dataService.currentProduct().badge }}</span>
          </div>
          <h1 class="text-[44px] sm:text-[54px] lg:text-[58px] font-bold text-[#0a2558] leading-[1.1] tracking-tight">
            {{ dataService.currentProduct().code }}
          </h1>
          <h2 class="text-[36px] sm:text-[48px] lg:text-[52px] font-normal text-[#0284c7] leading-[1.16] tracking-tight mt-0.5">
            {{ dataService.currentProduct().title }}
          </h2>
          <p class="text-[21px] sm:text-[28px] lg:text-[31px] font-semibold text-[#0f172a] tracking-[0.02em] leading-[1.28] mt-2.5 uppercase">
            {{ dataService.currentProduct().subtitle }}
          </p>
          <p class="text-[18px] sm:text-[24px] lg:text-[27px] font-normal text-[#334155] leading-[1.32] mt-1">
            {{ dataService.currentProduct().tagline }}
          </p>
          <div class="mt-10 sm:mt-14 flex flex-wrap items-center gap-4">
            <button
              type="button"
              (click)="dataService.openDemoModal()"
              class="cta-pill-gradient text-white font-medium text-[15px] sm:text-[16px] px-12 sm:px-16 py-3.5 sm:py-4 rounded-full">
              {{ dataService.currentProduct().ctaText }}
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroBannerComponent {
  constructor(public readonly dataService: SocietyDataService) {}
}
