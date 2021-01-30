import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // {
  //   path: 'vehicles',
  //   loadChildren: () => import('@zyweb/feature/vehicle').then((m) => m.FeatureVehicleModule),
  // },
  // {
  //   path: 'vehicleUseTypes',
  //   loadChildren: () => import('@zyweb/feature/lvms').then((m) => m.FeatureVehicleUseTypeModule),
  // },
  {
    path: '404',
    loadChildren: () => import('@zyweb/feature/common/not-found').then((m) => m.FeatureCommonNotFoundModule),
  },
  { path: '', redirectTo: '404', pathMatch: 'full' },
  // { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
