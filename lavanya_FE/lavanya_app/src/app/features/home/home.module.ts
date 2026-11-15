import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SandboxModule } from '../sandbox/sandbox.module';
import { CatalogModule } from '../catalog/catalog.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HeroBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SandboxModule,
    CatalogModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
