import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
  providers: [],
})
export class VehicleUseTypeMainContainersCreateModule {}
