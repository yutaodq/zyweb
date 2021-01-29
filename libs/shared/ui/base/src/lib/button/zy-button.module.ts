import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LIST_NEW_BUTTON_EXPORTS, ListNewButtonModule } from './list-new/list-new-button.module';

export const BUTTON_EXPORTS: Array<any> = [
  LIST_NEW_BUTTON_EXPORTS,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListNewButtonModule
  ],
  exports: [ListNewButtonModule]

})
export class ZyButtonModule { }
