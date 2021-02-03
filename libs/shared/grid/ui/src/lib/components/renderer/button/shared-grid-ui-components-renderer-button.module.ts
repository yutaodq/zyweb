import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRenderedComponent } from './button-rendered.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  ButtonRenderedComponent
];

@NgModule({
  imports: [
    CommonModule,
   SharedUiCommonModule,
    SharedUiBaseModule,
    AgGridModule
  ],
  declarations: [
    ButtonRenderedComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class SharedGridUiComponentsRendererButtonModule {}

