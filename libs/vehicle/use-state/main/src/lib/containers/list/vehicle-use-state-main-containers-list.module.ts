import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';
import { VehicleUseStateSearchNgrxGridService, VehicleUseStateFacade } from '@zyweb/shared/data-access/facade/lvms';

import { VehicleUseStateMainComponentsModule } from '../../components';
import { ListComponent } from './list.component';

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
  providers: [ VehicleUseStateFacade,
    {provide: SearchNgrxGridService, useClass: VehicleUseStateSearchNgrxGridService}
    ],
})
export class VehicleUseStateMainContainersListModule {}
