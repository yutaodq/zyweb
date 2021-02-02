import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehicleUseTypeMainContainersListModule } from './containers/list/vehicle-use-type-main-containers-list.module';
import { VehicleUseTypeMainContainersDetailsModule } from './containers/details/vehicle-use-type-main-containers-details.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseTypeDataAccessStoreModule,  // store
    VehicleFeatureVehicleUseTypeRouting,  // route
    VehicleUseTypeMainContainersListModule,
    VehicleUseTypeMainContainersDetailsModule,
  ],

})
export class VehicleUseTypeMainModule {}
