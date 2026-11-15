import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero-banner></app-hero-banner>
    <app-community-sandbox></app-community-sandbox>
    <app-features-grid></app-features-grid>
  `
})
export class HomePageComponent {}
