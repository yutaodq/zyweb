import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,

  ],
  declarations: [
    DetailsComponent,
  ],
  providers: [],
})
export class VehicleUseTypeMainContainersDetailsModule {}
