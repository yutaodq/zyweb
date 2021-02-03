import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  SharedGridUiComponentsRendererModule } from './renderer';

import { SharedGridUiComponentsSearchModule } from './search-ngrx/shared-grid-ui-components-search.module';
import { SharedGridUiComponentsGridModule } from './grid/shared-grid-ui-components-grid.module';
import { SharedGridUiComponentsSearchRxjsModule } from './search-rxjs/shared-grid-ui-components-search-rxjs.module';
import { SharedGridUiComponentsOverlayModule } from './overlay';

const EXPORTS_MODULES = [
  SharedGridUiComponentsSearchModule,
  SharedGridUiComponentsGridModule,
  SharedGridUiComponentsSearchRxjsModule,
  SharedGridUiComponentsRendererModule,
  SharedGridUiComponentsOverlayModule,
];

const COMPONENT = [
];
const EXPORTS_COMPONENT = [
];

const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES, ...EXPORTS_COMPONENT ],
  entryComponents: [
  ],

})
export class SharedUiGridComponentModule {}
