import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  // {
  //   path: 'vehicle',
  //   loadChildren: () => import('@zyweb/feature/vehicle')
  //   .then((m) => m.FeatureVehicleModule),
  // },
  {
    path: 'vehicleUseTypes',
    loadChildren: () => import('@zyweb/vehicle/use-type/main')
      .then((m) => m.VehicleUseTypeMainModule),
  },
  {
    path: 'vehicle',
    loadChildren: () => import('@zyweb/vehicle/vehicle/main')
      .then((m) => m.VehicleMainModule),
  },
  {
    path: '404',
    loadChildren: () => import('@zyweb/feature/common/not-found')
      .then((m) => m.FeatureCommonNotFoundModule),
  },
  { path: '', redirectTo: 'vehicleUseTypes', pathMatch: 'full' },

  // { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
