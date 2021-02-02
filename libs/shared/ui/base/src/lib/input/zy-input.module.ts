import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiDetailsInputModule } from './details-input/shared-ui-details-input.module';

const INPUT_EXPORTS: Array<any> = [
  SharedUiDetailsInputModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [...INPUT_EXPORTS]

})
export class ZyInputModule { }
