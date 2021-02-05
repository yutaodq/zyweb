import { Injectable } from '@angular/core';
import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
// https://github.com/Anthony-Lardy/trace-app/blob/6426f2b9c6591bd53599873ee95a93b1db102597/front/src/app/formly-config.module.ts
@Injectable()
export class FormlyValidation {
  constructor(private translate: TranslateService, private formlyConfig: FormlyConfig) {}

  init(): void {
    // message without params
    this.formlyConfig.addValidatorMessage('required', (_err, _field) =>
      '这是必填项'
      // this.translate.stream('validations.required')
    );

  //   // message with params
  //   this.formlyConfig.addValidatorMessage('minlength', (err, field) =>
  //     this.minlengthValidationMessage(err, field, this.translate)
  //   );
  //   this.formlyConfig.addValidatorMessage('maxlength', (err, field) =>
  //     this.maxlengthValidationMessage(err, field, this.translate)
  //   );
  //   this.formlyConfig.addValidatorMessage('min', (err, field) =>
  //     this.minValidationMessage(err, field, this.translate)
  //   );
  //   this.formlyConfig.addValidatorMessage('max', (err, field) =>
  //     this.maxValidationMessage(err, field, this.translate)
  //   );
  // }
  //
  // private minlengthValidationMessage(_err, field: FormlyFieldConfig, translate: TranslateService) {
  //   return translate.stream('validations.minLength', { number: field.templateOptions.minLength });
  // }
  //
  // private maxlengthValidationMessage(_err, field: FormlyFieldConfig, translate: TranslateService) {
  //   return translate.stream('validations.maxLength', { number: field.templateOptions.maxLength });
  // }
  //
  // private minValidationMessage(_err, field: FormlyFieldConfig, translate: TranslateService) {
  //   return translate.stream('validations.min', { number: field.templateOptions.min });
  // }
  //
  // private maxValidationMessage(_err, field: FormlyFieldConfig, translate: TranslateService) {
  //   return translate.stream('validations.max', { number: field.templateOptions.max });
  }
}
