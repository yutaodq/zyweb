import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeDetailsFormComponent } from './vehicle-use-type-details-form.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeDetailsFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [
    VehicleUseTypeDetailsFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseTypeMainComponentDetailFormModule {}

