import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as VehicleListComponent } from './containers/list/list.component';
import { DetailComponent as VehicleDetailComponent } from './containers/detail/detail.component';
import { VehicleExistsGuard } from './guards/vehicle-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehicleListComponent,
  },
  {
    path: ':id/detail',
    component: VehicleDetailComponent,
    canActivate: [VehicleExistsGuard],
    data: { title: 'Book detail' },
  },
  // {
  //   path: 'create',
  //   component: VehicleUseTypeCreateComponent,
  // },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleMainRouting
{
}
