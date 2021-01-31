import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehicleUseTypeMainContainersListModule } from './containers/list/vehicle-use-type-main-containers-list.module';
import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseTypeDataAccessStoreModule,  // store
    VehicleFeatureVehicleUseTypeRouting,  // route
    VehicleUseTypeMainContainersListModule,
  ],

})
export class VehicleUseTypeMainModule {}
