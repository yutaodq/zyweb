import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { UpdateZtFormComponent } from './update-zt-form.component';
import { UpdateNameFormPresenter } from './update-name-form.presenter';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';

export const COMPONENTS_EXPORTS : Array<any> = [
  UpdateZtFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
    SharedUiFormModule,
  ],
  declarations: [UpdateZtFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [UpdateNameFormPresenter],
})
export class UpdateZtFormModule {}

