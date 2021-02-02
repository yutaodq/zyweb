import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyButtonModule } from './button';
import { ZyInputModule } from './input';

const UI_BASE_EXPORTS: Array<any> = [
  ZyButtonModule,
  ZyInputModule,
];

@NgModule({
  imports: [CommonModule,
  ],
  exports: [
    ...UI_BASE_EXPORTS
  ]
})
export class SharedUiBaseModule {}
