import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ThemePrimengModule } from './_primeng/theme-primeng.module';

// const EXPORTS_COMMON_MODULES = [
//   ...EXPORTS_PRIMENG_MODULES
// ]
@NgModule({
  imports: [CommonModule,
  ],
  exports: [ThemePrimengModule,]
})
export class SharedUiCommonModule {}
