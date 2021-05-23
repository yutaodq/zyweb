import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiBaseFormErrorsModule } from './form-errors';

const UI_BASE_FORM_EXPORTS: Array<any> = [
  SharedUiBaseFormErrorsModule
];

@NgModule({
  imports: [CommonModule,
  ],
  exports: [
    ...UI_BASE_FORM_EXPORTS
  ]
})
export class SharedUiBaseFormModule {}
