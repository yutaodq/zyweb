import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { ActionsColumnRendererComponent } from './actions-column-renderer.component';
import { AgGridModule } from 'ag-grid-angular';

export const COMPONENTS_EXPORTS : Array<any> = [
  ActionsColumnRendererComponent
];

@NgModule({
  imports: [
    CommonModule,
   SharedUiCommonModule,
    SharedUiBaseModule,
    AgGridModule
  ],
  declarations: [
    ActionsColumnRendererComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class SharedGridUiComponentsRendererActionsColumnRedererModule {}

