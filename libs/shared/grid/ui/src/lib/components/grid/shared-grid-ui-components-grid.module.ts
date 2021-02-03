import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { GridComponent } from './grid.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';

export const COMPONENTS_EXPORTS : Array<any> = [
  GridComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [GridComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class SharedGridUiComponentsGridModule {}

