import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';

import { CreateFormComponent } from './create-form.component';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';
import { CreateStructureForm } from './create-structure-form.component';
import { CreateVehicleForm } from './create-vehicle-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiFormModule,
    SharedUiBaseModule,
    SharedUiDirectiveModule,
    SharedUtilI18nModule,
    ThemePrimengModule,
  ],
  declarations: [CreateFormComponent, CreateStructureForm, CreateVehicleForm],
  exports: [CreateFormComponent, CreateStructureForm, CreateVehicleForm],
})
export class VehicleCreateFormModule {}

