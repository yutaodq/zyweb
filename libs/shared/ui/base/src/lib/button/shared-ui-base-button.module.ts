import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LIST_NEW_BUTTON_EXPORTS, ListNewButtonModule } from './list-new/list-new-button.module';
import { SharedUiBaseButtonNewFormModule } from './new-form/shared-ui-base-button-new-form.module';

const BUTTON_EXPORTS: Array<any> = [
  ListNewButtonModule,
  SharedUiBaseButtonNewFormModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [...BUTTON_EXPORTS]

})
export class SharedUiBaseButtonModule { }
