import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleMainComponentsModule } from '../../components';
import { DetailsComponent } from './details.component';
import {  VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleMainComponentsModule,
    SplitButtonModule
  ],
  declarations: [
    DetailsComponent,
  ],
  providers: [ VehicleUseTypesFacade, DialogService],
})
export class VehicleUseTypeMainContainersDetailsModule {}
