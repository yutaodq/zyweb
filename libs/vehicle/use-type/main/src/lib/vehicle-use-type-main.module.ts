import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  VehicleUseTypeDataAccessStoreModule,
  VehicleUseTypesExistsService
} from '@zyweb/vehicle/use-type/data-access/store';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehicleUseTypeMainContainersListModule } from './containers/list/vehicle-use-type-main-containers-list.module';
import { VehicleUseTypeMainContainersDetailsModule } from './containers/detail/vehicle-use-type-main-containers-details.module';
import { VehicleUseTypeExistsGuard } from './guards/vehicle-use-type-exists.guard';
import { VehicleUseTypeMainContainersCreateModule } from './containers/create/vehicle-use-type-main-containers-create.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseTypeDataAccessStoreModule,  // store
    VehicleFeatureVehicleUseTypeRouting,  // route
    VehicleUseTypeMainContainersListModule,
    VehicleUseTypeMainContainersDetailsModule,
    VehicleUseTypeMainContainersCreateModule,
  ],
providers: [VehicleUseTypeExistsGuard, VehicleUseTypesExistsService]
})
export class VehicleUseTypeMainModule {}
