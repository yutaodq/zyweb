import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedGridUiComponentsRendererActionsColumnRedererModule } from './actions-column-renderer/shared-grid-ui-components-renderer-actions-column-rederer.module';
import { SharedGridUiComponentsRendererButtonModule } from './button/shared-grid-ui-components-renderer-button.module';
import { RendererComponent } from './renderer.component';

export const RENDERER_COMPONENTS_EXPORTS : Array<any> = [
  RendererComponent
];
export const RENDERER_MODULE_EXPORTS : Array<any> = [
  SharedGridUiComponentsRendererActionsColumnRedererModule,
  SharedGridUiComponentsRendererButtonModule
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RendererComponent
  ],
  exports: [...RENDERER_COMPONENTS_EXPORTS, ...RENDERER_MODULE_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class SharedGridUiComponentsRendererModule {}

