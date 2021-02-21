import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { UpdateNameFormComponent } from './update-name-form.component';
import { UpdateNameFormPresenter } from './update-name-form.presenter';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';

export const COMPONENTS_EXPORTS : Array<any> = [
  UpdateNameFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
    SharedUiFormModule,
  ],
  declarations: [UpdateNameFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [UpdateNameFormPresenter],
})
export class UpdateNameFormModule {}

