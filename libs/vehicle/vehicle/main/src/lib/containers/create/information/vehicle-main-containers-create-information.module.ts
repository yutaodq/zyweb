import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';
import {
  CreateInformationForm,
  CreateInformationFormActions,
  CreateInformationFormDataProvider,
  CreateInformationFormFactory
} from './providers';
import { CreateInformationComponent } from './create-information.component';
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
    CreateInformationComponent
  ],
  exports: [CreateInformationComponent],
  providers: [
    // CreateFormFactory,
    // { provide: CreateForm,
    //   useFactory: (factory: CreateFormFactory) => factory.create(),
    //   deps: [CreateFormFactory]
    // },
    // CreateFormDataProvider,
    // CreateFormActions,

  ],
})
export class VehicleMainContainersCreateInformationModule {
}
