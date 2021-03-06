import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import {
  VehicleUseStateSearchNgrxGridService
} from '@zyweb/shared/data-access/facade/lvms';

import { VehicleUseStateGridComponent } from './vehicle-use-state-grid.component';
import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';


export const COMPONENTS_EXPORTS: Array<any> = [
  VehicleUseStateGridComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedGridUiModule,
    SharedUiCommonModule,
    FormlyModule,
    ReactiveFormsModule
  ],
  declarations: [VehicleUseStateGridComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [
    VehicleUseStateSearchNgrxGridService,
    {
      provide: VehicleUseStateGridPresenter, useClass: VehicleUseStateGridPresenter
    }
  ]

})
export class VehicleUseStateGridModule {
}

