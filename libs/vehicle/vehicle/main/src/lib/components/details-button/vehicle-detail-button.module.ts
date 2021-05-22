import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleDetailButtonComponent } from './vehicle-detail-button.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SplitButtonModule } from 'primeng/splitbutton';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleDetailButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SplitButtonModule,
    // SharedUiCommonModule,
    // SharedUiBaseFormModule,
  ],
  declarations: [
    VehicleDetailButtonComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleDetailButtonModule {}

