import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { DetailButtonComponent } from './detail-button.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SplitButtonModule } from 'primeng/splitbutton';

export const COMPONENTS_EXPORTS : Array<any> = [
  DetailButtonComponent
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
    DetailButtonComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseSataeDetailButtonModule {}

