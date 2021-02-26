import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { VehicleUseTypeExistsGuard } from './guards/vehicle-use-type-exists.guard';
// import { VehicleUseTypesExistsService } from '@zyweb/shared/data-access/facade/lvms';

import { VehicleMainRouting } from './vehicle-main-routing.module';
import { VehicleDataAccessStoreModule } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleMainListModule } from './containers/list/vehicle-main-list.module';

@NgModule({
  imports: [
    CommonModule,
    VehicleDataAccessStoreModule,  // store
    VehicleMainRouting,  // route
    VehicleMainListModule,
  ],
  // providers: [VehicleUseTypeExistsGuard, VehicleUseTypesExistsService]
})
export class VehicleMainModule {}
