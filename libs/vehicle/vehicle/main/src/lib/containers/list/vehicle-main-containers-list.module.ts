import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

import { VehicleMainComponentsModule } from '../../components';
import { ListComponent } from './list.component';
import { VehicleFacade, VehicleSearchNgrxGridService } from '@zyweb/vehicle/vehicle/data-access/store';
import { ListVehicleService } from '../../services/list-vehicle.service';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,
    SharedGridUiModule

  ],
  declarations: [
    ListComponent,
  ],
  providers: [ VehicleFacade,
    ListVehicleService,
    {provide:SearchNgrxGridService, useClass:VehicleSearchNgrxGridService},
    ],
})
export class VehicleMainContainersListModule {}
