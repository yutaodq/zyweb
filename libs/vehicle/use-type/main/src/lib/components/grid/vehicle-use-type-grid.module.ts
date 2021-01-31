import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { SearchNgrxGridService, ThemePrimengModule } from '@zy/shared/locale-text';
// import { SharedUiComponentModule } from '@zy/shared/ui';
// import { SharedUiGridModule } from '@zy/shared/ui-grid';

import { FormlyModule } from '@ngx-formly/core';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiGridModule } from '@zyweb/shared/ui/grid';
import { VehicleUseTypeGridComponent } from './vehicle-use-type-grid.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeGridComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedUiGridModule,
    SharedUiCommonModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [VehicleUseTypeGridComponent
  ],
  exports: [...COMPONENTS_EXPORTS],

  entryComponents: [
  ]
})
export class VehicleUseTypeGridModule {}

