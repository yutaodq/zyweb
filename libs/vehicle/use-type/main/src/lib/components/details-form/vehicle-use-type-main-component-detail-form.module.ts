import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeDetailsFormComponent } from './vehicle-use-type-details-form.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeDetailsFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [VehicleUseTypeDetailsFormComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentDetailFormModule {}

