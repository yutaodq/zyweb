import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiLayoutIvmsLayoutModule } from './ivms';

@NgModule({
  imports: [CommonModule],
  exports: [SharedUiLayoutIvmsLayoutModule]
})
export class SharedUiLayoutModule {}
