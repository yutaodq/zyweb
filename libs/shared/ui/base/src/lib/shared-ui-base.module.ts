import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyButtonModule } from './button';
import { ZyInputModule } from './input';
import { ZyDialogDeleteModule } from './dialog-delete/zy-dialog-delete.module';

const UI_BASE_EXPORTS: Array<any> = [
  ZyButtonModule,
  ZyInputModule,
  ZyDialogDeleteModule,
];

@NgModule({
  imports: [CommonModule,
  ],
  exports: [
    ...UI_BASE_EXPORTS
  ]
})
export class SharedUiBaseModule {}
