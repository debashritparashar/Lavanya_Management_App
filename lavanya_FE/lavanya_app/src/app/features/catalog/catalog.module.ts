import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FeaturesGridComponent } from './components/features-grid/features-grid.component';

@NgModule({
  declarations: [FeaturesGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    CatalogRoutingModule
  ],
  exports: [FeaturesGridComponent]
})
export class CatalogModule {}
