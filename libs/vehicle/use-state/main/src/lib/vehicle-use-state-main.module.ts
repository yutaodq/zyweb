import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  VehicleUseStateDataAccessStoreModule,
  VehicleUseStateExistsService
} from '@zyweb/vehicle/use-state/data-access/store';

import { VehicleUseStateMainRouting } from './vehicle-use-state-main-routing.module';
import { VehicleUseStateMainContainersListModule } from './containers/list/vehicle-use-state-main-containers-list.module';
import { VehicleUseStateExistsGuard } from './guards/vehicle-use-state-exists.guard';
import { VehicleUseStateMainContainersDetailModule } from './containers/detail/vehicle-use-state-main-containers-detail.module';
// import { VehicleMainContainersCreateModule } from './containers/create/vehicle-main-containers-create.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseStateDataAccessStoreModule,  // store
    VehicleUseStateMainRouting,  // route
    VehicleUseStateMainContainersListModule,
    VehicleUseStateMainContainersDetailModule,
    // VehicleMainContainersCreateModule,
  ],
  providers: [VehicleUseStateExistsGuard, VehicleUseStateExistsService]
})
export class VehicleUseStateMainModule {}
