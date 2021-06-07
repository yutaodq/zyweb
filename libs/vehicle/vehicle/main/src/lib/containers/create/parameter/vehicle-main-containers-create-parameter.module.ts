import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';
import {
  CreateParameterForm,
  CreateParameterFormActions,
  CreateParameterFormDataProvider,
  CreateParameterFormFactory
} from './providers';
import { CreateParameterComponent } from './create-parameter.component';
import { CreateInformationComponent } from '..';

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
    CreateParameterComponent
  ],
  exports: [CreateParameterComponent],

  providers: [
    CreateParameterFormFactory,
    {
      provide: CreateParameterForm,
      useFactory: (factory: CreateParameterFormFactory) => factory.create(),
      deps: [CreateParameterFormFactory]
    },
    CreateParameterFormDataProvider,
    CreateParameterFormActions,

  ]
})
export class VehicleMainContainersCreateParameterModule {
}
