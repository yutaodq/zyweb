import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleDataService } from '@zyweb/shared/data-access/api/lvms';
import { ClickEventDirective } from './click-event.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
    ClickEventDirective
  ],
   providers: [
     VehicleDataService,
     VehicleFacade,
     VehicleUseStateFacade,
     CreateVehicleService,
   ],
})
export class VehicleMainContainersCreateModule {}
