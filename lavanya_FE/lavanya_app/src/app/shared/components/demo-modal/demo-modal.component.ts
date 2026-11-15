import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { SocietyDataService } from '../../../core/services/society-data.service';

@Component({
  selector: 'app-demo-modal',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (dataService.demoModalOpen()) {
      <div class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
        <div class="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
          <button
            type="button"
            (click)="dataService.closeDemoModal()"
            class="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600">
            ✕
          </button>
          <div class="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
            Lavanya Cosmos Society
          </div>
          <h3 class="text-2xl font-bold text-[#0f2c59] mt-1">Schedule A Live Demo</h3>
          <p class="text-sm text-gray-600 mt-1">
            Experience our multi-community township portal in action.
          </p>
          <div class="mt-6 flex justify-end gap-3">
            <button
              type="button"
              (click)="dataService.closeDemoModal()"
              class="px-5 py-2.5 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100">
              Close
            </button>
            <button
              type="button"
              (click)="dataService.closeDemoModal()"
              class="cta-pill-gradient text-white text-sm font-medium px-8 py-3 rounded-full">
              Confirm Slot
            </button>
          </div>
        </div>
      </div>
    }
  `
})
export class DemoModalComponent {
  constructor(public readonly dataService: SocietyDataService) {}
}
