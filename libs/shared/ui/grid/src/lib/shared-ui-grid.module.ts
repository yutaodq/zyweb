import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular';

import { LoadingOverlayComponent, NoRowsOverlayComponent } from './components/overlay';
import { SharedUiGridComponentModule } from './components';

const COMPONENT = [
];
const EXPORTS_COMPONENT = [
];

const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
  AgGridModule.withComponents(
    [...COMPONENT]),
];
const EXPORTS_MODULES = [
  AgGridModule,
  SharedUiGridComponentModule,
];
export const DATA_GRID_EXPORTS: Array<any> = [];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES, ...EXPORTS_COMPONENT, DATA_GRID_EXPORTS ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],

})
export class SharedUiGridModule {}
