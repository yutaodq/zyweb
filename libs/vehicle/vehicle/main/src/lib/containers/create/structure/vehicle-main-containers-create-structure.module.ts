import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';
import {
  CreateStructureForm,
  CreateStructureFormActions,
  CreateStructureFormDataProvider,
  CreateStructureFormFactory
} from './providers';
import { CreateStructureComponent } from './create-structure.component';
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
    CreateStructureComponent
  ],
  exports: [CreateStructureComponent],

  providers: [
    CreateStructureFormFactory,
    { provide: CreateStructureForm,
      useFactory: (factory: CreateStructureFormFactory) => factory.create(),
      deps: [CreateStructureFormFactory]
    },
    CreateStructureFormDataProvider,
    CreateStructureFormActions,

  ]
})
export class VehicleMainContainersCreateStructureModule {
}
