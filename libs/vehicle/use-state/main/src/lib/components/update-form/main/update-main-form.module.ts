import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { UpdateMainFormComponent } from './update-main-form.component';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';

export const COMPONENTS_EXPORTS : Array<any> = [
  UpdateMainFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
    SharedUiFormModule,
  ],
  declarations: [UpdateMainFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [],
})
export class UpdateMainFormModule {}

