import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as VehicleListComponent } from './containers/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: VehicleListComponent,
  },
  // {
  //   path: ':id/detail',
  //   component: VehicleUseTypeDetailsComponent,
  //   canActivate: [VehicleUseTypeExistsGuard],
  //   data: { title: 'Book details' },
  // },
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
