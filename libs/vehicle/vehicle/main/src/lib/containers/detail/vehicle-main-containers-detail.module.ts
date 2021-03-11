import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import { DialogService } from 'primeng/dynamicdialog';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { DetailComponent } from './detail.component';
import { VehicleFacade } from '@zyweb/vehicle/vehicle/data-access/store';
import { DetailVehicleService } from '../../services/detail-vehicle.service';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,
    SplitButtonModule
  ],
  declarations: [
    DetailComponent,
  ],
  providers: [ VehicleFacade, DialogService, DetailVehicleService],
})
export class VehicleMainContainersDetailModule {}
