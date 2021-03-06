import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import { DialogService } from 'primeng/dynamicdialog';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseStateMainComponentsModule } from '../../components';
import { DetailComponent } from './detail.component';
import { VehicleUseStateFacade } from '@zyweb/vehicle/use-state/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseStateMainComponentsModule,
    SplitButtonModule
  ],
  declarations: [
    DetailComponent,
  ],
  providers: [ VehicleUseStateFacade, DialogService],
})
export class VehicleUseStateMainContainersDetailModule {}
