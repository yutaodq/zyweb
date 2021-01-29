import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LIST_NEW_BUTTON_EXPORTS, ListNewButtonModule } from './list-new/list-new-button.module';

const BUTTON_EXPORTS: Array<any> = [
  ListNewButtonModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [...BUTTON_EXPORTS]

})
export class ZyButtonModule { }
