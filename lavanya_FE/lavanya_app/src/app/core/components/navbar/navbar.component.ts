import { Component, EventEmitter, Output, signal, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SocietyDataService } from '../../services/society-data.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="w-full bg-white z-50 sticky top-0 border-b border-sky-100 shadow-xs">
      <div class="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 h-24 flex items-center justify-between">
        <!-- Lavanya Cosmos Society Logo -->
        <a routerLink="/" (click)="closeAll()" class="flex items-center gap-3.5 text-left group focus:outline-none">
          <div class="flex flex-col items-center">
            <svg class="w-12 h-12 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="navLogoDeepBlue" x1="6" y1="6" x2="58" y2="38" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#1E3A8A" />
                  <stop offset="100%" stop-color="#0A1931" />
                </linearGradient>
                <linearGradient id="navLogoLightBlue" x1="8" y1="30" x2="56" y2="58" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#38BDF8" />
                  <stop offset="100%" stop-color="#0284C7" />
                </linearGradient>
              </defs>
              <path d="M32 3L57 15.5V35H7V15.5L32 3Z" fill="url(#navLogoDeepBlue)" />
              <ellipse cx="32" cy="24" rx="20" ry="7" transform="rotate(-14 32 24)" stroke="#7DD3FC" stroke-width="1.8" stroke-dasharray="3 2" fill="none" />
              <path d="M7 34H57V43L32 56.5L7 43V34Z" fill="url(#navLogoLightBlue)" />
              <path d="M21 34L32 44L43 34H21Z" fill="#0F2C59" />
              <rect x="21" y="18" width="9" height="20" rx="1" fill="#FFFFFF" />
              <rect x="32" y="13" width="11" height="25" rx="1" fill="#E0F2FE" />
              <path d="M25 8L26.2 11.3L29.5 12.5L26.2 13.7L25 17L23.8 13.7L20.5 12.5L23.8 11.3L25 8Z" fill="#38BDF8" />
            </svg>
            <span class="text-[9px] font-bold tracking-widest text-[#0284c7] -mt-1 leading-none">LCS</span>
          </div>
          <div class="flex flex-col justify-center">
            <span class="text-[22px] sm:text-[26px] font-semibold tracking-tight leading-none text-[#0f2c59]">
              Lavanya Cosmos Society
            </span>
            <span class="text-[12px] sm:text-[13.5px] font-medium text-[#0284c7] mt-1">
              Smart Community &amp; Township Portal
            </span>
          </div>
        </a>

        <!-- Desktop Navigation with Products, Features (15 items), and About Dropdowns -->
        <nav class="hidden lg:flex items-center gap-8 text-[14.5px] font-normal text-slate-800">
          <!-- Products Dropdown -->
          <div
            class="relative py-6"
            (mouseenter)="openDropdown('products')"
            (mouseleave)="closeAll()">
            <button
              type="button"
              (click)="toggleDropdown('products')"
              class="flex items-center gap-1.5 font-medium hover:text-[#0284c7] transition cursor-pointer"
              [class.text-[#0284c7]]="activeDropdown() === 'products'">
              <span>Products</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="activeDropdown() === 'products'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            @if (activeDropdown() === 'products') {
              <div class="absolute left-0 top-full w-80 bg-white rounded-b-xl shadow-2xl border border-sky-100 border-t-[3px] border-t-[#0f2c59] py-3 z-50">
                @for (prod of dataService.products; track prod.id) {
                  <button
                    type="button"
                    (click)="onSelectProduct(prod.id)"
                    class="w-full text-left px-5 py-3 hover:bg-sky-50/80 transition flex items-start justify-between gap-3 group">
                    <div>
                      <div class="text-xs font-bold uppercase tracking-wider text-[#0284c7]">{{ prod.code }}</div>
                      <div class="text-sm font-semibold text-[#0f2c59] group-hover:text-[#0284c7] mt-0.5">{{ prod.title }}</div>
                      <div class="text-xs text-slate-500 mt-0.5 line-clamp-1">{{ prod.tagline }}</div>
                    </div>
                    @if (dataService.activeProductId() === prod.id) {
                      <span class="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-sky-100 text-[#0284c7]">Active</span>
                    }
                  </button>
                }
              </div>
            }
          </div>

          <!-- Features Dropdown (All 15 Society Management Services - Matches Screenshot 2) -->
          <div
            class="relative py-6"
            (mouseenter)="openDropdown('features')"
            (mouseleave)="closeAll()">
            <button
              type="button"
              (click)="toggleDropdown('features')"
              class="flex items-center gap-1.5 font-medium hover:text-[#0284c7] transition cursor-pointer"
              [class.text-[#0284c7]]="activeDropdown() === 'features'">
              <span>Features</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="activeDropdown() === 'features'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            @if (activeDropdown() === 'features') {
              <div class="absolute left-0 top-full w-64 bg-white shadow-2xl border border-slate-100 border-t-[3px] border-t-[#0f2c59] py-2.5 z-50 max-h-[82vh] overflow-y-auto">
                @for (feat of dataService.features; track feat.id) {
                  <a
                    [routerLink]="feat.routePath"
                    routerLinkActive="bg-sky-50 font-semibold text-[#0f2c59]"
                    (click)="closeAll()"
                    class="block px-6 py-2.5 text-[13.5px] text-[#0284c7] hover:bg-sky-50 hover:text-[#0f2c59] hover:font-medium transition">
                    {{ feat.title }}
                  </a>
                }
                <div class="border-t border-slate-100 mt-1.5 pt-1.5 px-6 py-2">
                  <a
                    routerLink="/modules"
                    (click)="closeAll()"
                    class="block text-xs font-semibold text-[#0f2c59] hover:text-[#0284c7] transition">
                    View All 15 Modules Catalog →
                  </a>
                </div>
              </div>
            }
          </div>

          <!-- About Dropdown -->
          <div
            class="relative py-6"
            (mouseenter)="openDropdown('about')"
            (mouseleave)="closeAll()">
            <button
              type="button"
              (click)="toggleDropdown('about')"
              class="flex items-center gap-1.5 font-medium hover:text-[#0284c7] transition cursor-pointer"
              [class.text-[#0284c7]]="activeDropdown() === 'about'">
              <span>About</span>
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="activeDropdown() === 'about'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            @if (activeDropdown() === 'about') {
              <div class="absolute left-0 top-full w-64 bg-white rounded-b-xl shadow-2xl border border-sky-100 border-t-[3px] border-t-[#0f2c59] py-2.5 z-50">
                <a
                  routerLink="/"
                  (click)="closeAll()"
                  class="block px-5 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition">
                  Lavanya Cosmos Township Overview
                </a>
                <a
                  routerLink="/modules"
                  (click)="closeAll()"
                  class="block px-5 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition">
                  15 Lazy-Loaded Society Modules
                </a>
                <a
                  routerLink="/command-center"
                  (click)="closeAll()"
                  class="block px-5 py-2.5 text-sm text-slate-700 hover:bg-sky-50 hover:text-[#0284c7] transition">
                  Multi-Phase Command Center
                </a>
                <button
                  type="button"
                  (click)="closeAll(); scheduleDemo.emit()"
                  class="w-full text-left px-5 py-2.5 text-sm font-medium text-[#0284c7] hover:bg-sky-50 transition">
                  Schedule A Guided Demo
                </button>
              </div>
            }
          </div>

          <a
            routerLink="/command-center"
            routerLinkActive="text-[#0284c7] font-semibold"
            class="hover:text-[#0284c7] transition">
            Online Demo
          </a>

          <a
            routerLink="/admin-auth"
            routerLinkActive="ring-2 ring-[#0284c7]"
            class="ml-3 px-4 py-2 rounded-full bg-sky-50 text-[#0f2c59] font-medium hover:bg-sky-100 transition">
            Admin Login
          </a>
                    <a
            routerLink="/admin-auth/tenant"
            routerLinkActive="ring-2 ring-[#0284c7]"
            class="ml-3 px-4 py-2 rounded-full bg-sky-50 text-[#0f2c59] font-medium hover:bg-sky-100 transition">
            Tenant Login
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          (click)="mobileOpen.set(!mobileOpen())"
          class="lg:hidden p-2.5 rounded-xl border border-sky-100 text-[#0f2c59] hover:bg-sky-50 transition"
          aria-label="Toggle Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            @if (!mobileOpen()) {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            } @else {
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            }
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Drawer -->
      @if (mobileOpen()) {
        <div class="lg:hidden bg-white border-t border-sky-100 px-6 py-4 shadow-xl max-h-[80vh] overflow-y-auto">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">All 15 Society Features</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
            @for (feat of dataService.features; track feat.id) {
              <a
                [routerLink]="feat.routePath"
                (click)="mobileOpen.set(false)"
                class="px-3 py-2 rounded-lg text-sm text-[#0284c7] hover:bg-sky-50 font-medium">
                {{ feat.title }}
              </a>
            }
          </div>
          <div class="flex flex-wrap gap-3 pt-3 border-t border-slate-100">
            <a routerLink="/modules" (click)="mobileOpen.set(false)" class="px-4 py-2 rounded-lg bg-sky-50 text-[#0f2c59] text-sm font-medium">All Modules</a>
            <a routerLink="/command-center" (click)="mobileOpen.set(false)" class="px-4 py-2 rounded-lg bg-sky-50 text-[#0f2c59] text-sm font-medium">Online Demo</a>
            <a routerLink="/admin-auth" (click)="mobileOpen.set(false)" class="px-4 py-2 rounded-lg bg-[#0f2c59] text-white text-sm font-medium">Admin Login</a>
            <a routerLink="/admin-auth/tenant" (click)="mobileOpen.set(false)" class="px-4 py-2 rounded-lg bg-[#0f2c59] text-white text-sm font-medium">Tenant Login</a>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  @Output() scheduleDemo = new EventEmitter<void>();
  readonly activeDropdown = signal<'products' | 'features' | 'about' | null>(null);
  readonly mobileOpen = signal(false);

  constructor(
    public readonly dataService: SocietyDataService,
    private readonly router: Router
  ) {}

  openDropdown(menu: 'products' | 'features' | 'about'): void {
    this.activeDropdown.set(menu);
  }

  toggleDropdown(menu: 'products' | 'features' | 'about'): void {
    this.activeDropdown.update(curr => (curr === menu ? null : menu));
  }

  closeAll(): void {
    this.activeDropdown.set(null);
  }

  onSelectProduct(productId: string): void {
    this.dataService.selectProduct(productId);
    this.closeAll();
    this.router.navigate(['/']);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAll();
    this.mobileOpen.set(false);
  }
}
