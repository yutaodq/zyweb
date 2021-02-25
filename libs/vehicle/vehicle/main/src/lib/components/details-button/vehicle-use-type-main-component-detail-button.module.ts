import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeDetailButtonComponent } from './vehicle-use-type-detail-button.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SplitButtonModule } from 'primeng/splitbutton';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeDetailButtonComponent
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
    VehicleUseTypeDetailButtonComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseTypeMainComponentDetailButtonModule {}

