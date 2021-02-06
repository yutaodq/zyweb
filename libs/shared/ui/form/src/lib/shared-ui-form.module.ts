import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyWrapperPanelComponent } from './formly-wrapper';
import { FormlyValidation } from './formly-validation';
import { config } from './config/formly.config';

const providers = []
/**
 * Formly global configuration
 * https://github.com/Anthony-Lardy/trace-app/blob/6426f2b9c6591bd53599873ee95a93b1db102597/front/src/app/formly-config.module.ts
 */


const formlyModuleProviders = FormlyModule.forRoot(config).providers;

const UI_FORM_EXPORTS_MODULE = [
  FormlyModule,
  FormlyPrimeNGModule,
  RxReactiveFormsModule,
  FormsModule,
  ReactiveFormsModule,

]
@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormlyPrimeNGModule,
    RxReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...UI_FORM_EXPORTS_MODULE
  ],
  declarations: [FormlyWrapperPanelComponent],
  providers: [FormlyValidation],
})

export class SharedUiFormModule {
  constructor(formlyValidation: FormlyValidation) {
    formlyValidation.init();
  }

  static forRoot(): ModuleWithProviders<SharedUiFormModule> {
    return {
      ngModule: SharedUiFormModule,
      providers: [formlyModuleProviders],
    };
  }

}
