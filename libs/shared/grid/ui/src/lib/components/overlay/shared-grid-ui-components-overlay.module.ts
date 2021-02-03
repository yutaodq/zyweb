import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { NoRowsOverlayComponent } from './no-rows-overlay.component';
import { LoadingOverlayComponent } from './loading-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent,
  ],
  exports: [NoRowsOverlayComponent, LoadingOverlayComponent],
  providers: [ ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],
})
export class SharedGridUiComponentsOverlayModule {}

