import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';
import {
  VehicleUseStateFacade,
  VehicleUseStateSearchNgrxGridService
} from '@zyweb/vehicle/use-state/data-access/store';

import { VehicleUseStateMainComponentsModule } from '../../components';
import { ListComponent } from './list.component';
import { ListVehicleUseStateService } from '../../services/list-vehicle-use-state.service';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseStateMainComponentsModule,
    SharedGridUiModule

  ],
  declarations: [
    ListComponent,
  ],
  providers: [VehicleUseStateFacade,
    ListVehicleUseStateService,
    {provide: SearchNgrxGridService, useClass: VehicleUseStateSearchNgrxGridService}
    ],
})
export class VehicleUseStateMainContainersListModule {}
