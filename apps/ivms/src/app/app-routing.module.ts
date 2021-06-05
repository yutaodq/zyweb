import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'information',
    loadChildren: () => import('@zyweb/vehicle/vehicle/main')
      .then((m) => m.VehicleMainModule),
  },
  {
    path: 'vehicleUseType',
    loadChildren: () => import('@zyweb/vehicle/use-type/main')
      .then((m) => m.VehicleUseTypeMainModule),
  },
  {
    path: 'vehicleUseState',
    loadChildren: () => import('@zyweb/vehicle/use-state/main')
      .then((m) => m.VehicleUseStateMainModule),
  },
  {
    path: '404',
    loadChildren: () => import('@zyweb/feature/common/not-found')
      .then((m) => m.FeatureCommonNotFoundModule),
  },
  { path: '', redirectTo: 'vehicleUseState', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
