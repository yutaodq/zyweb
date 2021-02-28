import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import { DialogService } from 'primeng/dynamicdialog';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { DetailComponent } from './detail.component';
import {  VehicleFacade } from '@zyweb/shared/data-access/facade/lvms';

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
  providers: [ VehicleFacade, DialogService],
})
export class VehicleMainContainersDetailModule {}
