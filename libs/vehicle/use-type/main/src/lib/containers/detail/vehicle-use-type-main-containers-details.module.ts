import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { DialogService } from 'primeng/dynamicdialog';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';
import { DetailComponent } from './detail.component';
import { DetailVehicleUseTypeService } from '../../services/detail-vehicle-use-type.service';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,
    SplitButtonModule
  ],
  declarations: [
    DetailComponent,
  ],
  providers: [ VehicleUseTypeFacade,
    DetailVehicleUseTypeService,
    DialogService],
})
export class VehicleUseTypeMainContainersDetailsModule {}
