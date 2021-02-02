import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeGridModule } from './grid/vehicle-use-type-grid.module';
import { VehicleUseTypeMainComponentDetailFormModule } from './details-form/vehicle-use-type-main-component-detail-form.module';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS,
    VehicleUseTypeGridModule,
    VehicleUseTypeMainComponentDetailFormModule
  ],

  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsModule {}

