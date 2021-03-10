import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';

import { VehicleUseStateGridComponent } from './vehicle-use-state-grid.component';
import { VehicleUseStateGridPresenter } from './vehicle-use-state-grid.presenter';
import { VehicleUseStateSearchNgrxGridService } from '@zyweb/vehicle/use-state/data-access/store';


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
    {
      provide: VehicleUseStateGridPresenter, useClass: VehicleUseStateGridPresenter
    }
  ]

})
export class VehicleUseStateGridModule {
}

