import { Injectable } from '@angular/core';
import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

// https://github.com/Anthony-Lardy/trace-app/blob/6426f2b9c6591bd53599873ee95a93b1db102597/front/src/app/formly-config.module.ts
@Injectable()
export class FormlyValidation {
  constructor(private formlyConfig: FormlyConfig) {
  }

  init(): void {
    // message without params
    this.formlyConfig.addValidatorMessage('uniqueName', (_err, _field) =>
      '已经存在相同的：' + _field.templateOptions.label + ' 信息'
    );

    this.formlyConfig.addValidatorMessage('required', (_err, _field) =>
      _field.templateOptions.label + ': 是必填写信息'
    );

    // message with params
    this.formlyConfig.addValidatorMessage('minlength', (err, field) =>
      this.minlengthValidationMessage(err, field)
    );
    this.formlyConfig.addValidatorMessage('maxlength', (err, field) =>
      this.maxlengthValidationMessage(err, field)
    );
    this.formlyConfig.addValidatorMessage('min', (err, field) =>
      this.minValidationMessage(err, field)
    );
    this.formlyConfig.addValidatorMessage('max', (err, field) =>
      this.maxValidationMessage(err, field)
    );
  }

  private minlengthValidationMessage(_err, field: FormlyFieldConfig) {
    return field.templateOptions.label + '：最小长度不能少于' + field.templateOptions.minLength + '个字符';
  }

  private maxlengthValidationMessage(_err, field: FormlyFieldConfig) {
    return field.templateOptions.label + '：最大长度不能多于' + field.templateOptions.maxLength + '个字符';
  }

  private minValidationMessage(_err, field: FormlyFieldConfig) {
    return field.templateOptions.label + '：不能小于' + field.templateOptions.min;
  }

  private maxValidationMessage(_err, field: FormlyFieldConfig) {
    return field.templateOptions.label + '：不能大于' + field.templateOptions.max;
  }
}
