import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyModule } from '@ngx-formly/core';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleUseTypeGridComponent } from './vehicle-use-type-grid.component';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleUseTypeGridPresenter } from './vehicle-use-type-grid.presenter';

export const COMPONENTS_EXPORTS : Array<any> = [
  VehicleUseTypeGridComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedGridUiModule,
    SharedUiCommonModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [VehicleUseTypeGridComponent,
  ],
  exports: [...COMPONENTS_EXPORTS],
providers: [VehicleUseTypeSearchNgrxGridService, VehicleUseTypeGridPresenter],

})
export class VehicleUseTypeGridModule {}

