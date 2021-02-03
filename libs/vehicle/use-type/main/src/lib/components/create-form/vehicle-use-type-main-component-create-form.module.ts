import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { CreateFormComponent } from './create-form.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  CreateFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [CreateFormComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentCreateFormModule {}

