import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as VehicleUseTypeListComponent } from './containers/list/list.component';
import { DetailsComponent as VehicleUseTypeDetailsComponent } from './containers/details/details.component';
import { CreateComponent as VehicleUseTypeCreateComponent } from './containers/create/create.component';

import { VehicleUseTypeExistsGuard } from './guards/vehicle-use-type-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehicleUseTypeListComponent,
  },
  {
    path: ':id/detail',
    component: VehicleUseTypeDetailsComponent,
    canActivate: [VehicleUseTypeExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: 'create',
    component: VehicleUseTypeCreateComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleFeatureVehicleUseTypeRouting {
}
