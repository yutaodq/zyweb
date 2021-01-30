import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';
import { SharedVehiclesDataAccesStoreUseTypeModule } from '@zy/shared/vehicles/data-acces/store/use-type';
import { SharedVehicleDataAccesFacadeModule } from '@zy/shared/vehicle/data-acces-facade';
import { SharedVehiclesDataAccesApiUseTypeModule } from '@zy/shared/vehicles/data-acces/api/use-type';
import { SharedUtilsThemePrimengModule } from '@zy/shared/utils/theme-primeng';
import { SharedUiBaseModule } from '@zy/shared/ui/base';
@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting,
    SharedVehiclesDataAccesStoreUseTypeModule,
    SharedVehicleDataAccesFacadeModule,
    SharedVehiclesDataAccesApiUseTypeModule,
    SharedUtilsThemePrimengModule,
    SharedUiBaseModule,
  ],
  declarations: [
    VehiclesUseTypeComponent,
    ]

})
export class VehicleUseTypeMainModule {}
