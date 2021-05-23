import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsComponent } from './form-errors.component';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';

@NgModule({
  imports: [CommonModule,
    SharedUtilI18nModule,
  ],
  declarations: [FormErrorsComponent],
  exports: [FormErrorsComponent],
})
export class SharedUiBaseFormErrorsModule {}
