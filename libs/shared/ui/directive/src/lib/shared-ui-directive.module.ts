import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { directives } from './directives';

@NgModule({
  imports: [CommonModule],
  exports: [
    ...directives,
  ],
  declarations: [...directives],
})
export class SharedUiDirectiveModule {}
