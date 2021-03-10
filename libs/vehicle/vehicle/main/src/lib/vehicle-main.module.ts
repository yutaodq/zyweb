import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { VehicleMainRouting } from './vehicle-main-routing.module';
import { VehicleDataAccessStoreModule } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleMainContainersListModule } from './containers/list/vehicle-main-containers-list.module';
import { VehicleMainContainersDetailModule } from './containers/detail/vehicle-main-containers-detail.module';
import { VehicleExistsGuard } from './guards/vehicle-exists.guard';
import { VehicleExistsService, VehicleSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { VehicleMainContainersCreateModule } from './containers/create/vehicle-main-containers-create.module';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

@NgModule({
  imports: [
    CommonModule,
    VehicleDataAccessStoreModule,  // store
    VehicleMainRouting,  // route
    VehicleMainContainersListModule,
    VehicleMainContainersDetailModule,
    VehicleMainContainersCreateModule,
  ],
  providers: [
    VehicleExistsGuard,
    VehicleExistsService,
  ]
})
export class VehicleMainModule {}
