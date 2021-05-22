import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const UI_BASE_FORM_EXPORTS: Array<any> = [
];

@NgModule({
  imports: [CommonModule,
  ],
  exports: [
    ...UI_BASE_FORM_EXPORTS
  ]
})
export class SharedUiBaseFormModule {}
