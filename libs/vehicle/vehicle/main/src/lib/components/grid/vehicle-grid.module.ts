import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { SharedUiCommonModule } from '@zyweb/shared/ui/common';
import { VehicleGridComponent } from './vehicle-grid.component';
import { SharedGridUiModule } from '@zyweb/shared/grid/ui';
import { VehicleGridPresenter } from './vehicle-grid.presenter';

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
    {
      provide: VehicleGridPresenter, useClass: VehicleGridPresenter
    }
  ]

})
export class VehicleGridModule {
}

