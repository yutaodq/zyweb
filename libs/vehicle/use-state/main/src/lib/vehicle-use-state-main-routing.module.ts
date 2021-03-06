import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as VehicleUseStateListComponent } from './containers/list/list.component';
import { VehicleUseStateExistsGuard } from './guards/vehicle-use-state-exists.guard';
import { DetailComponent as VehicleUseStateDetailComponent } from './containers/detail/detail.component';
import { CreateComponent as VehicleUseStateCreateComponent } from './containers/create/create.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehicleUseStateListComponent,
  },
  {
    path: ':id/detail',
    component: VehicleUseStateDetailComponent,
    canActivate: [VehicleUseStateExistsGuard],
    data: { title: 'Book detail' },
  },
  {
    path: 'create',
    component: VehicleUseStateCreateComponent,
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
export class VehicleUseStateMainRouting
{
}
