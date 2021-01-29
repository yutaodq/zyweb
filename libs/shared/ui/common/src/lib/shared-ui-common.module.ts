import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPORTS_PRIMENG_MODULES } from './_primeng/theme-primeng.module';

const EXPORTS_COMMON_MODULES = [
  ...EXPORTS_PRIMENG_MODULES
]
@NgModule({
  imports: [CommonModule,

  ],
  exports: [...EXPORTS_COMMON_MODULES]
})
export class SharedUiCommonModule {}
