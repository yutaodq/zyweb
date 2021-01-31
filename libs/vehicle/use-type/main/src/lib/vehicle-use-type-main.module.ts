import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';
import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from './components';

@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting,
    VehicleUseTypeDataAccessStoreModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule
  ],
  declarations: [
    VehiclesUseTypeComponent,
    ]

})
export class VehicleUseTypeMainModule {}
