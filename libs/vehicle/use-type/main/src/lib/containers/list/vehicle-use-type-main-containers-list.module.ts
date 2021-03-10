import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';
import { ListComponent } from './list.component';
import { VehicleUseTypeSearchNgrxGridService, VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,
    SharedGridUiModule

  ],
  declarations: [
    ListComponent,
  ],
  providers: [ VehicleUseTypeFacade,
    {provide:SearchNgrxGridService, useClass:VehicleUseTypeSearchNgrxGridService}
    ],
})
export class VehicleUseTypeMainContainersListModule {}
