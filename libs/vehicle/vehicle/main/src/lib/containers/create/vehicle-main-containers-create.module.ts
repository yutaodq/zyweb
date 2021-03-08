import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleApiClient } from '@zyweb/shared/data-access/api/lvms';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
   providers: [VehicleApiClient, VehicleFacade, VehicleUseStateFacade, CreateVehicleService],
})
export class VehicleMainContainersCreateModule {}
