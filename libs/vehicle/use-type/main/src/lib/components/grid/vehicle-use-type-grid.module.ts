import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeGridComponent } from './vehicle-use-type-grid.component';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { GridComponent } from './grid.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeGridComponent,
  GridComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedGridUiModule,
    SharedUiCommonModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [VehicleUseTypeGridComponent,
    GridComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
providers: [],
  entryComponents: [
  ]
})
export class VehicleUseTypeGridModule {}

