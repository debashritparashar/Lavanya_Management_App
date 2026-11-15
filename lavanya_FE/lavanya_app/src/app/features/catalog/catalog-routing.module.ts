import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesGridComponent } from './components/features-grid/features-grid.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
