import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { VehicleUseTypeDetailsToolbarComponent } from './vehicle-use-type-details-toolbar.component';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeDetailsToolbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    SharedUiCommonModule,
    SharedUiBaseModule,
  ],
  declarations: [VehicleUseTypeDetailsToolbarComponent

  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsDetailToolbarModule {}

