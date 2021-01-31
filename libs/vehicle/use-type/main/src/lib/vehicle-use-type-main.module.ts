import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';
import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';

@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting,
    VehicleUseTypeDataAccessStoreModule,
    SharedUiBaseModule,
  ],
  declarations: [
    VehiclesUseTypeComponent,
    ]

})
export class VehicleUseTypeMainModule {}
