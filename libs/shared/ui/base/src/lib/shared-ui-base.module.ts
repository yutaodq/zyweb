import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyButtonModule } from './button';

const UI_BASE_EXPORTS: Array<any> = [
  ZyButtonModule,
];

@NgModule({
  imports: [CommonModule,
  ],
  exports: [
    ...UI_BASE_EXPORTS
  ]
})
export class SharedUiBaseModule {}
