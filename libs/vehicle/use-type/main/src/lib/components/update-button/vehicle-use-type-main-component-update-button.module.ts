import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeUpdateButtonComponent } from './vehicle-use-type-update-button.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SplitButtonModule } from 'primeng/splitbutton';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeUpdateButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SplitButtonModule,
    // SharedUiCommonModule,
    // SharedUiBaseModule,
  ],
  declarations: [
    VehicleUseTypeUpdateButtonComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseTypeMainComponentUpdateButtonModule {}

