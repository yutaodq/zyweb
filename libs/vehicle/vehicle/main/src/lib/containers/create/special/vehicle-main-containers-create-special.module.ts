import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';
import {
  CreateSpecialForm,
  CreateSpecialFormActions,
  CreateSpecialFormDataProvider,
  CreateSpecialFormFactory
} from './providers';
import { CreateSpecialComponent } from './create-special.component';
import { CreateParameterComponent } from '..';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    ReactiveFormsModule,
    ThemePrimengModule,
    SharedUiFormModule,
    SharedUiDirectiveModule,

  ],
  declarations: [
    CreateSpecialComponent
  ],
  exports: [CreateSpecialComponent],

  providers: [
    CreateSpecialFormFactory,
    {
      provide: CreateSpecialForm,
      useFactory: (factory: CreateSpecialFormFactory) => factory.create(),
      deps: [CreateSpecialFormFactory]
    },
    CreateSpecialFormDataProvider,
    CreateSpecialFormActions,

  ]
})
export class VehicleMainContainersCreateSpecialModule {
}
