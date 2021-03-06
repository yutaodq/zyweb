import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';

import { CreateFormComponent } from './create-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiFormModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
    SharedUiDirectiveModule,
  ],
  declarations: [CreateFormComponent],
  exports: [CreateFormComponent],
})
export class VehicleUseStateCreateFormModule {}

