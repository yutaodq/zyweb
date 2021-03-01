import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleGridComponent } from './vehicle-grid.component';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import {
  VehicleSearchNgrxGridService
} from '@zyweb/shared/data-access/facade/lvms';
import { VehicleGridPresenter } from './vehicle-grid.presenter';
import { SearchNgrxGridService } from '@zyweb/shared/grid/core';

export const COMPONENTS_EXPORTS: Array<any> = [
  VehicleGridComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedGridUiModule,
    SharedUiCommonModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [VehicleGridComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [
    VehicleSearchNgrxGridService,
    {
      provide: VehicleGridPresenter, useClass: VehicleGridPresenter
    }
  ]

})
export class VehicleGridModule {
}

