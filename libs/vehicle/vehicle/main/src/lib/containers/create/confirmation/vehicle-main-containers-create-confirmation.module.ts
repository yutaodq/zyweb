import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';
import {
  CreateConfirmationForm,
  CreateConfirmationFormActions,
  CreateConfirmationFormDataProvider,
  CreateConfirmationFormFactory
} from './providers';
import { CreateConfirmationComponent } from './create-confirmation.component';
import { VehicleCreateFormModule } from '../../../components/create-form';

@NgModule({
  imports: [
    CommonModule,
    SharedUiBaseModule,
    ReactiveFormsModule,
    ThemePrimengModule,
    SharedUiFormModule,
    SharedUiDirectiveModule,
    VehicleCreateFormModule,
  ],
  declarations: [
    CreateConfirmationComponent
  ],
  exports: [CreateConfirmationComponent],
  providers: [
    CreateConfirmationFormFactory,
    {
      provide: CreateConfirmationForm,
      useFactory: (factory: CreateConfirmationFormFactory) => factory.create(),
      deps: [CreateConfirmationFormFactory]
    },
    CreateConfirmationFormDataProvider,
    CreateConfirmationFormActions,

  ]
})
export class VehicleMainContainersCreateConfirmationModule {
}
