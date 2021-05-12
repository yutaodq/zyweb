import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import {  VehicleUseTypeDataService } from '@zyweb/shared/data-access/api/lvms';
import { CreateVehicleUseTypeService } from '../../services/create-vehicle-use-type.service';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
  providers: [VehicleUseTypeDataService,
    VehicleUseTypeFacade,
    CreateVehicleUseTypeService
  ],
})
export class VehicleUseTypeMainContainersCreateModule {}
