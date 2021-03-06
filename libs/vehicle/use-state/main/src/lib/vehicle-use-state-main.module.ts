import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleUseStateDataAccessStoreModule } from '@zyweb/vehicle/use-state/data-access/store';

import { VehicleUseStateMainRouting } from './vehicle-use-state-main-routing.module';
import { VehicleUseStateMainContainersListModule } from './containers/list/vehicle-use-state-main-containers-list.module';
// import { VehicleMainContainersDetailModule } from './containers/detail/vehicle-main-containers-detail.module';
// import { VehicleExistsGuard } from './guards/vehicle-exists.guard';
// import { VehicleUseStateExistsService } from '@zyweb/shared/data-access/facades/lvms';
// import { VehicleMainContainersCreateModule } from './containers/create/vehicle-main-containers-create.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleUseStateDataAccessStoreModule,  // store
    VehicleUseStateMainRouting,  // route
    VehicleUseStateMainContainersListModule,
    // VehicleMainContainersDetailModule,
    // VehicleMainContainersCreateModule,
  ],
  // providers: [VehicleExistsGuard, VehicleUseStateExistsService]
})
export class VehicleUseStateMainModule {}
