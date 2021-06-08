import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as VehicleListComponent } from './containers/list/list.component';
import { DetailComponent as VehicleDetailComponent } from './containers/detail/detail.component';
import { VehicleExistsGuard } from './guards/vehicle-exists.guard';
import { CreateComponent } from './containers/create/create.component';
import {
  CreateInformationComponent,
  CreateParameterComponent,
  CreateSpecialComponent,
  CreateStructureComponent
} from './containers/create';
import { CreateConfirmationComponent } from './containers/create/confirmation/create-confirmation.component';

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
  {
    path: 'create',
    component: CreateComponent,
    children:[
      { path: '', redirectTo: 'createInformation', pathMatch: 'full' },
      {
        path: 'createInformation',
        component: CreateInformationComponent,
      },
      {
        path: 'createStructure',
        component: CreateStructureComponent,
      },
      {
        path: 'createParameter',
        component: CreateParameterComponent,
      },
      {
        path: 'createSpecial',
        component: CreateSpecialComponent,
      },
      {
        path: 'createConfirmation',
        component: CreateConfirmationComponent,
      },

    ]
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
export class VehicleMainRouting
{
}
