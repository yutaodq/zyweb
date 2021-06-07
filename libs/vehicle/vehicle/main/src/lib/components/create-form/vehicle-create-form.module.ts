import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';

import { CreateInformationFormComponent } from './create-information-form.component';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';
import { CreateStructureFormComponent } from './create-structure-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiFormModule,
    SharedUiBaseModule,
    SharedUiDirectiveModule,
    SharedUtilI18nModule,
    ThemePrimengModule,
  ],
  declarations: [CreateInformationFormComponent, CreateStructureFormComponent],
  exports: [CreateInformationFormComponent, CreateStructureFormComponent],
})
export class VehicleCreateFormModule {}

