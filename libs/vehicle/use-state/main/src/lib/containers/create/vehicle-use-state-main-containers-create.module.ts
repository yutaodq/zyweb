import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseStateMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { CreateVehicleUseStateService } from '../../services';
import { VehicleUseStateApiClient } from '@zyweb/shared/data-access/api/lvms';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseStateMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
  providers: [VehicleUseStateApiClient,
    VehicleUseStateFacade,
    CreateVehicleUseStateService
  ],
})
export class VehicleUseStateMainContainersCreateModule {}
