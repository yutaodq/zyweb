import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyButtonModule } from './button';

@NgModule({
  imports: [CommonModule,
    ZyButtonModule
  ],
  exports: [
    ZyButtonModule
  ]
})
export class SharedUiBaseModule {}
