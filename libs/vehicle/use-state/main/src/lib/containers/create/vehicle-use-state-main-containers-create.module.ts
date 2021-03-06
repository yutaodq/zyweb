import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseStateMainComponentsModule } from '../../components';
import { CreateComponent } from './create.component';
import { VehicleUseTypesFacade } from '@zyweb/shared/data-access/facade/lvms';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    VehicleUseStateMainComponentsModule,

  ],
  declarations: [
    CreateComponent,
  ],
  providers: [VehicleUseTypesFacade],
})
export class VehicleUseStateMainContainersCreateModule {}
