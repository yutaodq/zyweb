import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';
import { ButtonRenderedComponent, RendererComponent } from './renderer';
import { LoadingOverlayComponent, NoRowsOverlayComponent } from './overlay';
import { ActionsColumnRendererComponent } from './renderer/actions-column-renderer/actions-column-renderer.component';

import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedGridUiComponentsSearchModule } from './search-ngrx/shared-grid-ui-components-search.module';
import { SharedGridUiComponentsGridModule } from './grid/shared-grid-ui-components-grid.module';
import { SharedGridUiComponentsSearchRxjsModule } from './search-rxjs/shared-grid-ui-components-search-rxjs.module';
const EXPORTS_MODULES = [
  SharedGridUiComponentsSearchModule,
  SharedGridUiComponentsGridModule,
  SharedGridUiComponentsSearchRxjsModule,
];

const COMPONENT = [
  RendererComponent,
  ButtonRenderedComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
  ActionsColumnRendererComponent
];
const EXPORTS_COMPONENT = [
  RendererComponent,
  ButtonRenderedComponent,
  NoRowsOverlayComponent,
  LoadingOverlayComponent,
  ActionsColumnRendererComponent
];

const IMPORTS_MODULES = [
  CommonModule,
  FormsModule,
  ThemePrimengModule,

];

const PROVIDERS = [];

@NgModule({
  imports: [IMPORTS_MODULES],
  declarations: [...COMPONENT],
  exports: [...EXPORTS_MODULES, ...EXPORTS_COMPONENT ],
  entryComponents: [
    NoRowsOverlayComponent,
    LoadingOverlayComponent
  ],

})
export class SharedUiGridComponentModule {}
