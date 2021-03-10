import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';
import { VehicleSearchNgrxGridService, VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';

import { VehicleMainComponentsModule } from '../../components';
import { ListComponent } from './list.component';

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
    {provide:SearchNgrxGridService, useClass:VehicleSearchNgrxGridService},
    // {provide:VehicleSearchNgrxGridService, useClass:VehicleSearchNgrxGridService}
    ],
})
export class VehicleMainContainersListModule {}
