import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';

import { VehicleUseTypeMainContainersListModule } from './containers/list/vehicle-use-type-main-containers-list.module';
import { VehicleUseTypeMainContainersDetailsModule } from './containers/details/vehicle-use-type-main-containers-details.module';
import { VehicleUseTypeExistsGuard } from './guards/vehicle-use-type-exists.guard';
import { VehicleUseTypesExistsService } from '@zyweb/shared/data-access/facade/lvms';
import { VehicleUseTypeMainContainersCreateModule } from './containers/create/vehicle-use-type-main-containers-create.module';
import { VehicleMainRouting } from './vehicle-main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseTypeDataAccessStoreModule,  // store
    VehicleMainRouting,  // route
    VehicleUseTypeMainContainersListModule,
    VehicleUseTypeMainContainersDetailsModule,
    VehicleUseTypeMainContainersCreateModule,
  ],
  providers: [VehicleUseTypeExistsGuard, VehicleUseTypesExistsService]
})
export class VehicleVehicleMainModule {}
