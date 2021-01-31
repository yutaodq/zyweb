import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';
import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting,
    VehicleUseTypeDataAccessStoreModule,
  ],
  declarations: [
    VehiclesUseTypeComponent,
    ]

})
export class VehicleUseTypeMainModule {}
