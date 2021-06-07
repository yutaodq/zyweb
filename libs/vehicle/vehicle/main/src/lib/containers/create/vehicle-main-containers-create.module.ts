import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { CreateVehicleService } from '../../services/create-vehicle.service';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { VehicleDataService } from '@zyweb/shared/data-access/api/lvms';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';

import { VehicleMainContainersCreateInformationModule } from './information/vehicle-main-containers-create-information.module';
import { VehicleMainContainersCreateSpecialModule } from './special/vehicle-main-containers-create-special.module';
import { VehicleMainContainersCreateStructureModule } from './structure/vehicle-main-containers-create-structure.module';
import { VehicleMainContainersCreateParameterModule } from './parameter/vehicle-main-containers-create-parameter.module';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,
    ReactiveFormsModule,
    ThemePrimengModule,
    SharedUiFormModule,
    SharedUiDirectiveModule,
    VehicleMainContainersCreateInformationModule,
    VehicleMainContainersCreateParameterModule,
    VehicleMainContainersCreateSpecialModule,
    VehicleMainContainersCreateStructureModule,
  ],
  declarations: [
    CreateComponent,
  ],
  providers: [
    VehicleDataService,
    VehicleFacade,
    VehicleUseStateFacade,
    CreateVehicleService,

  ]
})
export class VehicleMainContainersCreateModule {
}
