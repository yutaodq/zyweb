import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { CreateFormComponent } from './create-form.component';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';

export const COMPONENTS_EXPORTS : Array<any> = [
  CreateFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiFormModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [CreateFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
})
export class VehicleUseTypeMainComponentCreateFormModule {}

