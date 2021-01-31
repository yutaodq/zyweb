import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleUseTypeGridModule } from './grid/vehicle-use-type-grid.module';

export const COMPONENTS_EXPORTS : Array<any> = [
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [...COMPONENTS_EXPORTS, VehicleUseTypeGridModule],

  entryComponents: [
  ]
})
export class VehicleUseTypeMainComponentsModule {}

