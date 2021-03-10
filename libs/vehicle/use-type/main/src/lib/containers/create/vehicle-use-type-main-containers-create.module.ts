import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { VehicleUseTypeFacade } from '@zyweb/vehicle/use-type/data-access/store';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseTypeMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
  providers: [VehicleUseTypeFacade],
})
export class VehicleUseTypeMainContainersCreateModule {}
