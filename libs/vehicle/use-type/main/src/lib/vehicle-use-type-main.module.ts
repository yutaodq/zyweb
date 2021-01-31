import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleFeatureVehicleUseTypeRouting } from './vehicle-use-type-main-routing.module';
import { VehiclesUseTypeComponent } from './containers/list/vehicles-use-type.component';
import { VehicleUseTypeDataAccessStoreModule } from '@zyweb/vehicle/use-type/data-access/store';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from './components';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from './services';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

@NgModule({
  imports: [
    CommonModule,
    VehicleFeatureVehicleUseTypeRouting,
    VehicleUseTypeDataAccessStoreModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,
    SharedGridUiModule

  ],
  declarations: [
    VehiclesUseTypeComponent,
    ],
  providers: [ {provide:SearchNgrxGridService, useClass:VehicleUseTypeSearchNgrxGridService}],
})
export class VehicleUseTypeMainModule {}
