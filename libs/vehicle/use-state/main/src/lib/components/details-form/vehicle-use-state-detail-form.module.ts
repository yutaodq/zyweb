import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';

import { DetailFormComponent } from './detail-form.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  DetailFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [
    DetailFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseStateDetailFormModule {}

